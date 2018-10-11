package be.wse.odb.service;

import be.wse.odb.util.ChaincodeUtil;
import be.wse.odb.util.ChaincodeUtil.DocType;
import be.wse.odb.util.ChaincodeUtil.InvokeAction;
import be.wse.odb.util.ChaincodeUtil.QueryAction;
import be.wse.odb.util.TestObjectFileReader;
import com.google.gson.Gson;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;

/*
 * These tests read JSON data from a file.
 * For each method in the service, the tests check if the data is mapped and returned.
 * Actual return values are not tested here.
 *
 */

public class ChainQueryServiceTest {

    @Mock
    private ChainService chainServiceMock;

    @InjectMocks
    private ChainQueryService chainQueryService;

    private String[] erkenningObjectAsStringArgs;
    private String id = "EO-100074";

    @Mock
    InvalidArgumentException e = new InvalidArgumentException("Invalid argument");

    @Before
    public void setUp() throws IOException, InvalidArgumentException, ProposalException {
        MockitoAnnotations.initMocks(this);

        JsonObject erkenningJsonObject = TestObjectFileReader.getErkenningenArrayJson().getJsonObject(0);
        JsonArray erkenningenJsonArray = TestObjectFileReader.getErkenningenArrayJson();
        this.erkenningObjectAsStringArgs = new String[] {new Gson().toJson(erkenningJsonObject)};

        doReturn(erkenningJsonObject).when(chainServiceMock).query(QueryAction.queryById, id);
        doReturn(erkenningenJsonArray).when(chainServiceMock).query(QueryAction.richQuery, ChaincodeUtil.selectAllQuery(DocType.ODB_ERKENNING));
        doReturn(erkenningenJsonArray).when(chainServiceMock).query(QueryAction.richQuery, ChaincodeUtil.selectByKeyValueQuery(DocType.ODB_ERKENNING, "key", "val"));
        doReturn(erkenningenJsonArray).when(chainServiceMock).query(QueryAction.getHistoryByKey, id);
    }

    // TESTS

    // HAPPY FLOW

    // CHAINSERVICE QUERY OR INVOKE IS CALLED

    @Test
    public void createInvokesChaincode() throws ProposalException, InvalidArgumentException, InterruptedException, ExecutionException, TimeoutException {
        chainQueryService.create(InvokeAction.invokeErkenning, erkenningObjectAsStringArgs);
        verify(chainServiceMock).invoke(InvokeAction.invokeErkenning, erkenningObjectAsStringArgs);
    }

    @Test
    public void queryByIdQueriesChaincode() throws ProposalException, InvalidArgumentException {
        chainQueryService.queryById(id);
        verify(chainServiceMock).query(QueryAction.queryById, id);
    }

    @Test
    public void queryAllQueriesChaincode() throws ProposalException, InvalidArgumentException {
        chainQueryService.queryAll(DocType.ODB_ERKENNING);
        verify(chainServiceMock).query(QueryAction.richQuery, ChaincodeUtil.selectAllQuery(DocType.ODB_ERKENNING));
    }

    @Test
    public void queryByKeyValueQueriesChaincode() throws ProposalException, InvalidArgumentException {
        chainQueryService.queryByKeyValue(DocType.ODB_ERKENNING, "key", "val");
        verify(chainServiceMock).query(QueryAction.richQuery, ChaincodeUtil.selectByKeyValueQuery(DocType.ODB_ERKENNING, "key", "val"));
    }

    @Test
    public void queryHistoryQueriesChaincode() throws ProposalException, InvalidArgumentException, InterruptedException, ExecutionException, TimeoutException {
        chainQueryService.queryObjectHistory(id);
        verify(chainServiceMock).query(QueryAction.getHistoryByKey, id);
    }
}