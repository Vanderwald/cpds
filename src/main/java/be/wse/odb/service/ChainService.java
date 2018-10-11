package be.wse.odb.service;

import be.wse.odb.config.HLFConfig;
import be.wse.odb.util.ChaincodeUtil.InvokeAction;
import be.wse.odb.util.ChaincodeUtil.QueryAction;
import com.google.protobuf.ByteString;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j;
import org.hyperledger.fabric.sdk.*;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.json.Json;
import javax.json.JsonStructure;
import java.io.ByteArrayInputStream;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.stream.Collectors;

@Log4j
@Service
@Getter
@Setter
public class ChainService {

    private final HLFConfig hlfConfig;
    private final HLFService hlfService;

    @Autowired
    public ChainService(HLFConfig hlfConfig, HLFService hlfService) {
        this.hlfConfig = hlfConfig;
        this.hlfService = hlfService;
    }

    JsonStructure query(QueryAction action, String queryString) throws ProposalException, InvalidArgumentException {
        Channel channel = hlfService.getMyClient().getChannel(getHlfConfig().getChannelName());
        QueryByChaincodeRequest qpr = hlfService.getMyClient().newQueryProposalRequest();
        ChaincodeID chainCodeId = ChaincodeID.newBuilder().setName(getHlfConfig().getChaincodeId()).build();
        qpr.setChaincodeID(chainCodeId);
        qpr.setFcn(action.toString());
        qpr.setArgs(queryString);

        log.info("QUERYING BLOCKCHAIN ...");
        log.info(" --- " + action + " --- ");
        log.info(queryString);

        Collection<ProposalResponse> queryProposals = channel.queryByChaincode(qpr);
        for (ProposalResponse response : queryProposals) {
            if (response.isVerified() && response.getStatus() == ChaincodeResponse.Status.SUCCESS) {
                ByteString payload = response.getProposalResponse().getResponse().getPayload();
                log.info("'" + payload.toStringUtf8() + "'");
                try {
                    return Json.createReader(new ByteArrayInputStream(payload.toByteArray())).read();
                } catch (Exception e) {
                    log.error(e.getMessage());
                    throw e;
                }
            } else {
                throw new RuntimeException("response failed. status: " + response.getStatus());
            }
        }
        return null;
    }

    void invoke(InvokeAction action, String[] args) throws InterruptedException, ExecutionException, TimeoutException, ProposalException, InvalidArgumentException {
        BlockEvent.TransactionEvent event = sendTransaction(action, args).get(15, TimeUnit.SECONDS);
        if (event.isValid()) {
            log.info("Transacion tx: " + event.getTransactionID() + " is completed.");
        } else {
            log.error("Transaction tx: " + event.getTransactionID() + " is invalid.");
        }
    }

    CompletableFuture<BlockEvent.TransactionEvent> sendTransaction(InvokeAction action, String[] args) throws InvalidArgumentException, ProposalException {
        TransactionProposalRequest tpr = hlfService.getMyClient().newTransactionProposalRequest();
        ChaincodeID chainCodeId = ChaincodeID.newBuilder().setName(getHlfConfig().getChaincodeId()).build();
        tpr.setChaincodeID(chainCodeId);
        tpr.setFcn(action.toString());
        tpr.setArgs(args);

        Collection<ProposalResponse> responses = hlfService.getMyChannel().sendTransactionProposal(tpr);
        List<ProposalResponse> invalid = responses.stream().filter(ChaincodeResponse::isInvalid).collect(Collectors.toList());

        log.info("STARTING TRANSACTION ...");
        log.info(" --- " + action + " --- ");

        log.info("WITH ARGUMENTS ...");
        log.info(" --- " + tpr.getArgs() + " --- ");

        if (!invalid.isEmpty()) {
            invalid.forEach(response -> {
                System.out.println("==============================2");
                log.error(response.getMessage());
                System.out.println("==============================");
            });
            throw new RuntimeException("invalid response(s) found");
        }
        return hlfService.getMyChannel().sendTransaction(responses);
    }
}
