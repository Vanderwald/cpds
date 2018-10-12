package be.bewire.chainport.service;

import org.hyperledger.fabric.sdk.Channel;
import org.hyperledger.fabric.sdk.HFClient;

public interface HLFService {
    HFClient getMyClient();
    Channel getMyChannel();
}
