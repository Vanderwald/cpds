package be.wse.odb.service;

import be.wse.odb.mapper.ErkenningMapper;
import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.util.ChaincodeUtil;
import be.wse.odb.util.ChaincodeUtil.DocType;
import be.wse.odb.util.TestObjectFileReader;
import com.google.gson.Gson;
import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;
import static org.mockito.Mockito.*;

/*
 * These tests read JSON data from a file.
 * For each method in the service, the tests check if the data is mapped and returned.
 * Actual return values are not tested here.
 *
 */

public class ErkenningServiceTest {

    @Mock
    private ChainQueryService chainQueryServiceMock;

    @Mock
    private ErkenningMapper erkenningMapperMock;

    @InjectMocks
    private ErkenningService erkenningService;

    private JsonArray chaincodeReturnArray;
    private JsonObject chaincodeReturnSingle;
    private List<ErkenningDTO> mapperReturnArray;
    private ErkenningDTO mapperReturnSingle;
    private String id = "EO-100074";

    @Mock
    InvalidArgumentException e = new InvalidArgumentException("Invalid argument");

    @Before
    public void setUp() throws IOException, ProposalException, InvalidArgumentException {
        MockitoAnnotations.initMocks(this);

        this.chaincodeReturnArray = TestObjectFileReader.getErkenningenBlockChain();
        this.chaincodeReturnSingle = TestObjectFileReader.getErkenningenBlockChain().getJsonObject(0);
        this.mapperReturnArray = TestObjectFileReader.getErkenningenMapped();
        this.mapperReturnSingle = new Gson().fromJson(this.chaincodeReturnSingle.getJsonObject("Record")
                .asJsonObject().toString(), ErkenningDTO.class);

        doReturn(chaincodeReturnSingle).when(chainQueryServiceMock).queryById(id);
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryByKeyValue(DocType.ODB_ERKENNING, "naamOpleiding", "adaptor 0.98765");
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryAll(DocType.ODB_ERKENNING);
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryObjectHistory(id);

        doReturn(mapperReturnSingle).when(erkenningMapperMock).mapErkenning(chaincodeReturnSingle.getJsonObject("Record").asJsonObject());
        doReturn(mapperReturnArray).when(erkenningMapperMock).mapErkenningen(chaincodeReturnArray);
    }

    // TESTS

    // HAPPY FLOW

    // CHAINSERVICE IS CALLED


    @Test
    public void createCallsChainService() throws InterruptedException, ExecutionException, TimeoutException, ProposalException, InvalidArgumentException {
        String[] args = new String[]{new Gson().toJson(mapperReturnSingle)};
        chainQueryServiceMock.create(ChaincodeUtil.InvokeAction.invokeErkenning, args);
        verify(chainQueryServiceMock, times(1)).create(ChaincodeUtil.InvokeAction.invokeErkenning, args);
    }
    @Test
    public void getByIdCallsChainService() throws ProposalException, InvalidArgumentException {
        erkenningService.getById(id);
        verify(chainQueryServiceMock).queryById(id);
    }
    @Test
    public void getAllCallsChainService() throws ProposalException, InvalidArgumentException {
        erkenningService.getAll();
        verify(chainQueryServiceMock).queryAll(DocType.ODB_ERKENNING);
    }
    @Test
    public void getHistoryCallsChainService() throws ProposalException, InvalidArgumentException {
        erkenningService.getHistory(id);
        verify(chainQueryServiceMock).queryObjectHistory(id);
    }


    // MAPPER IS USED


    @Test
    public void getByIdUsesMapper() {
        erkenningService.getById(id);
        verify(erkenningMapperMock).mapErkenning(chaincodeReturnSingle.getJsonObject("Record").asJsonObject());
    }
    @Test
    public void getAllUsesMapper() {
        erkenningService.getAll();
        verify(erkenningMapperMock).mapErkenningen(chaincodeReturnArray);
    }
    @Test
    public void getHistoryCallsMapper() {
        erkenningService.getHistory(id);
        verify(erkenningMapperMock).mapErkenningen(chaincodeReturnArray);
    }


    // OBJECT OR ARRAY IS RETURNED


    @Test
    public void getByIdReturnsObject() {
        ErkenningDTO erkenning = erkenningService.getById(id);
        Assert.assertEquals(erkenning.getClass(), ErkenningDTO.class);
    }
    @Test
    public void getAllReturnsList() {
        List<ErkenningDTO> erkenningen = erkenningService.getAll();
        Assert.assertEquals(erkenningen.getClass(), ArrayList.class);
        Assert.assertEquals(erkenningen.get(0).getClass(), ErkenningDTO.class);
        Assert.assertEquals(erkenningen.size(), mapperReturnArray.size());
    }
    @Test
    public void getHistoryReturnsList() {
        List<ErkenningDTO> erkenningen = erkenningService.getHistory(id);
        Assert.assertEquals(erkenningen.getClass(), ArrayList.class);
        Assert.assertEquals(erkenningen.get(0).getClass(), ErkenningDTO.class);
        Assert.assertEquals(erkenningen.size(), mapperReturnArray.size());
    }

    // UNHAPPY FLOW

    // EXCEPTIONS ARE LOGGED


    @Test
    public void createPrintsException() throws ProposalException, InvalidArgumentException, InterruptedException, ExecutionException, TimeoutException {
        String[] args = new String[]{new Gson().toJson(mapperReturnSingle)};
        doThrow(e).when(chainQueryServiceMock).create(ChaincodeUtil.InvokeAction.invokeErkenning, args);
        erkenningService.create(mapperReturnSingle);
        verify(e).printStackTrace();
    }
    @Test
    public void getByIdPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryById(id);
        erkenningService.getById(id);
        verify(e).printStackTrace();
    }
    @Test
    public void getAllPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryAll(DocType.ODB_ERKENNING);
        erkenningService.getAll();
        verify(e).printStackTrace();
    }
    @Test
    public void getHistoryPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryObjectHistory(id);
        erkenningService.getHistory(id);
        verify(e).printStackTrace();
    }


    // NULL IS RETURNED


    @Test
    public void getByIdReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryById(id);
        Assert.assertNull(erkenningService.getById(id));
    }
    @Test
    public void getAllReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryAll(DocType.ODB_ERKENNING);
        Assert.assertNull(erkenningService.getAll());
    }
    @Test
    public void getHistoryReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryObjectHistory(id);
        Assert.assertNull(erkenningService.getHistory(id));
    }
}