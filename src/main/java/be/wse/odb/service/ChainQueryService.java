package be.wse.odb.service;

import be.wse.odb.util.ChaincodeUtil;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

@Service
public class ChainQueryService {

    private ChainService chainService;

    @Autowired
    public ChainQueryService(ChainService chainService) {
        this.chainService = chainService;
    }

    void create(ChaincodeUtil.InvokeAction action, String[] args) throws InterruptedException, ExecutionException, TimeoutException, ProposalException, InvalidArgumentException {
        chainService.invoke(action, args);
    }

    JsonObject queryById(String id) throws InvalidArgumentException, ProposalException {
        return chainService.query(ChaincodeUtil.QueryAction.queryById, id).asJsonObject();
    }

    JsonArray queryAll(ChaincodeUtil.DocType docType) throws InvalidArgumentException, ProposalException {
        return chainService.query(ChaincodeUtil.QueryAction.richQuery, ChaincodeUtil.selectAllQuery(docType)).asJsonArray();
    }

    JsonArray queryByKeyValue(ChaincodeUtil.DocType docType, String key, String value) throws InvalidArgumentException, ProposalException {
        return chainService.query(ChaincodeUtil.QueryAction.richQuery, ChaincodeUtil.selectByKeyValueQuery(docType, key, value)).asJsonArray();
    }

    JsonArray queryObjectHistory(String id) throws InvalidArgumentException, ProposalException {
        return chainService.query(ChaincodeUtil.QueryAction.getHistoryByKey, id).asJsonArray();
    }
}
