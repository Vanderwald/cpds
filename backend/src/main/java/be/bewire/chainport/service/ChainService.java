package be.bewire.chainport.service;

import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import javax.json.JsonStructure;

public interface ChainService {
    JsonStructure query(String action, String queryString) throws ProposalException, InvalidArgumentException;
    void invoke(String action, String[] args) throws InterruptedException, ExecutionException, TimeoutException, ProposalException, InvalidArgumentException;
}
