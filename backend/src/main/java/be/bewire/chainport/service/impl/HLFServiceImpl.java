package be.bewire.chainport.service.impl;

import org.hyperledger.fabric.sdk.Channel;
import org.hyperledger.fabric.sdk.Enrollment;
import org.hyperledger.fabric.sdk.EventHub;
import org.hyperledger.fabric.sdk.HFClient;
import org.hyperledger.fabric.sdk.Orderer;
import org.hyperledger.fabric.sdk.Peer;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.TransactionException;
import org.hyperledger.fabric.sdk.security.CryptoSuite;
import org.hyperledger.fabric_ca.sdk.HFCAClient;
import org.hyperledger.fabric_ca.sdk.RegistrationRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Properties;

import be.bewire.chainport.config.HLFConfig;
import be.bewire.chainport.domain.AppUser;
import be.bewire.chainport.service.HLFService;

@Service
public class HLFServiceImpl implements HLFService {
    private final Logger log = LoggerFactory.getLogger(ChainServiceImpl.class);
    private HLFConfig myHlfConfig;
    private HFClient myClient;
    private Channel myChannel;
    private HFCAClient myHfcaClient;

    @Autowired
    public HLFServiceImpl(HLFConfig hlfConfig) throws Exception {
        try {
            // Get config
            setMyHlfConfig(hlfConfig);

            // create fabric-ca client
            setMyHfcaClient(getHfCaClient(getMyHlfConfig().getCaUrl(), null));

            // enroll or load admin
            AppUser admin = getAdmin();
            log.info(admin.toString());

            // register and enroll new user
            AppUser appUser = getUser(admin, getMyHlfConfig().getUsername());
            log.info(appUser.toString());

            // get HFC client instance
            setMyClient(getHfClient());

            // set user context
            getMyClient().setUserContext(admin);

            // get HFC channel using the client
            setMyChannel(getChannel());
            log.info("Channel: " + getMyChannel().getName());
        } catch (Exception e) {
            log.error("Failed to initialize HLFService", e);
            throw e;
        }
    }

    /**
     * Initialize and get HF channel
     *
     * @return Channel                      Initialized channel
     * @throws InvalidArgumentException Invalid arguments
     * @throws TransactionException     Transaction exception
     */
    private Channel getChannel() throws InvalidArgumentException, TransactionException {
        // peer name and endpoint in the network
        Peer peer = getMyClient().newPeer("peer0.org1.example.com", "grpc://localhost:7051");
        // eventhub name and endpoint in the network
        EventHub eventHub = getMyClient().newEventHub("eventhub01", "grpc://localhost:7053");
        // orderer name and endpoint in the network
        Orderer orderer = getMyClient().newOrderer("orderer.example.com", "grpc://localhost:7050");
        // channel name in the network
        Channel myChannel = getMyClient().newChannel(getMyHlfConfig().getChannelName());
        myChannel.addPeer(peer);
        myChannel.addEventHub(eventHub);
        myChannel.addOrderer(orderer);
        myChannel.initialize();
        return myChannel;
    }

    /**
     * Create new HLF client
     *
     * @return HFClient                     New HLF client instance. Never null.
     */
    private HFClient getHfClient() throws Exception {
        // initialize default cryptosuite
        CryptoSuite cryptoSuite = CryptoSuite.Factory.getCryptoSuite();
        // setup the client
        HFClient myClient = HFClient.createNewInstance();
        myClient.setCryptoSuite(cryptoSuite);
        return myClient;
    }


    /**
     * Register and enroll user with userId. If AppUser object with the name already exist on fs it
     * will be loaded and registration and enrollment will be skipped.
     *
     * @param registrar The registrar to be used.
     * @param userId    The user id.
     * @return AppUser      Instance with userId, affiliation,mspId and enrollment set.
     * @throws Exception Exception
     */
    private AppUser getUser(AppUser registrar, String userId) throws Exception {
        AppUser appUser = tryDeserialize(userId);
        if (appUser == null) {
            RegistrationRequest rr = new RegistrationRequest(userId, getMyHlfConfig().getAffiliation());
            String enrollmentSecret = getMyHfcaClient().register(rr, registrar);
            Enrollment enrollment = getMyHfcaClient().enroll(userId, enrollmentSecret);
            appUser = new AppUser(userId, getMyHlfConfig().getAffiliation(), getMyHlfConfig().getMspId(), enrollment);
            serialize(appUser);
        }
        return appUser;
    }

    /**
     * Enroll admin into fabric-ca using {@code admin/adminpw} credentials. If AppUser object
     * already exist serialized on fs it will be loaded and new enrollment will not be executed.
     *
     * @return AppUser      Instance with userId, affiliation, mspId and enrollment set
     * @throws Exception Exception
     */
    private AppUser getAdmin() throws Exception {
        AppUser admin = tryDeserialize("admin");
        if (admin == null) {
            Enrollment adminEnrollment = getMyHfcaClient().enroll("admin", "adminpw");
            admin = new AppUser("admin", getMyHlfConfig().getAffiliation(), getMyHlfConfig().getMspId(), adminEnrollment);
            serialize(admin);
        }
        return admin;
    }

    /**
     * Get new fabic-ca client
     *
     * @param caUrl              The fabric-ca-server endpoint url
     * @param caClientProperties The fabri-ca client properties. Can be null.
     * @return HFCAClient           New client instance. never null.
     * @throws Exception Exception
     */
    private HFCAClient getHfCaClient(String caUrl, Properties caClientProperties) throws Exception {
        CryptoSuite cryptoSuite = CryptoSuite.Factory.getCryptoSuite();
        HFCAClient myHfcaClient = HFCAClient.createNewInstance(caUrl, caClientProperties);
        myHfcaClient.setCryptoSuite(cryptoSuite);
        return myHfcaClient;
    }


    /*
    ================================================================
            User (de)serialization utility functions
            Files are stored in the base directory
    ================================================================
     */

    /**
     * Serialize AppUser object to file
     *
     * @param appUser The object to be serialized
     * @throws IOException IOException
     */
    private void serialize(AppUser appUser) throws IOException {
        try (ObjectOutputStream oos = new ObjectOutputStream(Files.newOutputStream(
                Paths.get(appUser.getName() + ".json")))) {
            oos.writeObject(appUser);
        }
    }

    /**
     * Deserialize AppUser object from file
     *
     * @param name The name of the user. Used to build file name ${name}.json
     * @return AppUser      The app user
     * @throws Exception Exception
     */
    private AppUser tryDeserialize(String name) throws Exception {
        if (Files.exists(Paths.get(name + ".json"))) {
            return deserialize(name);
        }
        return null;
    }

    /**
     * Deserialize AppUser object from file
     *
     * @param name The name of the user. Used to build file name ${name}.json
     * @return AppUser      The app user
     * @throws Exception Exception
     */
    private AppUser deserialize(String name) throws Exception {
        try (ObjectInputStream decoder = new ObjectInputStream(
                Files.newInputStream(Paths.get(name + ".json")))) {
            return (AppUser) decoder.readObject();
        }
    }

    //Getters for client and channel

    public HFClient getMyClient() {
        return myClient;
    }

    public Channel getMyChannel() {
        return myChannel;
    }

    // Private getters and setters

    private void setMyClient(HFClient myClient) {
        this.myClient = myClient;
    }

    private void setMyChannel(Channel myChannel) {
        this.myChannel = myChannel;
    }

    private HLFConfig getMyHlfConfig() {
        return myHlfConfig;
    }

    private void setMyHlfConfig(HLFConfig myHlfConfig) {
        this.myHlfConfig = myHlfConfig;
    }

    private HFCAClient getMyHfcaClient() {
        return myHfcaClient;
    }

    private void setMyHfcaClient(HFCAClient myHfcaClient) {
        this.myHfcaClient = myHfcaClient;
    }
}