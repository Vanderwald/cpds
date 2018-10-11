package be.wse.odb.service;

import be.wse.odb.mapper.AanvraagMapper;
import be.wse.odb.model.AanvraagDTO;
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

public class AanvraagServiceTest {

    @Mock
    private ChainQueryService chainQueryServiceMock;

    @Mock
    private AanvraagMapper aanvraagMapperMock;

    @InjectMocks
    private AanvraagService aanvraagService;

    private JsonArray chaincodeReturnArray;
    private JsonObject chaincodeReturnSingle;
    private List<AanvraagDTO> mapperReturnArray;
    private AanvraagDTO mapperReturnSingle;
    private String id = "032874a9-ee2f-405d-b371-b04a3803bb8c";

    @Mock
    InvalidArgumentException e = new InvalidArgumentException("Invalid argument");

    @Before
    public void setUp() throws IOException, ProposalException, InvalidArgumentException {
        MockitoAnnotations.initMocks(this);

        this.chaincodeReturnArray =  TestObjectFileReader.getAanvragenBlockChain();
        this.chaincodeReturnSingle = TestObjectFileReader.getAanvragenBlockChain().getJsonObject(0);
        this.mapperReturnArray = TestObjectFileReader.getAanvragenMapped();
        this.mapperReturnSingle = new Gson().fromJson(this.chaincodeReturnSingle.getJsonObject("Record")
                .asJsonObject().toString(), AanvraagDTO.class);


        doReturn(chaincodeReturnSingle).when(chainQueryServiceMock).queryById(id);
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryByKeyValue(DocType.ODB_AANVRAAG, "naamOpleiding", "adaptor 0.98765");
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryAll(DocType.ODB_AANVRAAG);
        doReturn(chaincodeReturnArray).when(chainQueryServiceMock).queryObjectHistory(id);

        doReturn(mapperReturnSingle).when(aanvraagMapperMock).mapAanvraag(chaincodeReturnSingle.getJsonObject("Record").asJsonObject());
        doReturn(mapperReturnArray).when(aanvraagMapperMock).mapAanvragen(chaincodeReturnArray);
    }

    // TESTS

    // HAPPY FLOW

    // CHAINSERVICE IS CALLED


    @Test
    public void createCallsChainService() throws InterruptedException, ExecutionException, TimeoutException, ProposalException, InvalidArgumentException {
        String[] args = new String[]{new Gson().toJson(mapperReturnSingle)};
        chainQueryServiceMock.create(ChaincodeUtil.InvokeAction.invokeAanvraag, args);
        verify(chainQueryServiceMock, times(1)).create(ChaincodeUtil.InvokeAction.invokeAanvraag, args);
    }
    @Test
    public void getByIdCallsChainService() throws ProposalException, InvalidArgumentException {
        aanvraagService.getById(id);
        verify(chainQueryServiceMock).queryById(id);
    }
    @Test
    public void getAllCallsChainService() throws ProposalException, InvalidArgumentException {
        aanvraagService.getAll();
        verify(chainQueryServiceMock).queryAll(DocType.ODB_AANVRAAG);
    }
    @Test
    public void getByKeyValueCallsChainService() throws ProposalException, InvalidArgumentException {
        aanvraagService.getByKeyValue("naamOpleiding", "adaptor 0.98765");
        verify(chainQueryServiceMock).queryByKeyValue(DocType.ODB_AANVRAAG,"naamOpleiding", "adaptor 0.98765");
    }
    @Test
    public void getHistoryCallsChainService() throws ProposalException, InvalidArgumentException {
        aanvraagService.getHistory(id);
        verify(chainQueryServiceMock).queryObjectHistory(id);
    }


    // MAPPER IS USED


    @Test
    public void getByIdUsesMapper() {
        aanvraagService.getById(id);
        verify(aanvraagMapperMock).mapAanvraag(chaincodeReturnSingle.getJsonObject("Record").asJsonObject());
    }
    @Test
    public void getAllUsesMapper() {
        aanvraagService.getAll();
        verify(aanvraagMapperMock).mapAanvragen(chaincodeReturnArray);
    }
    @Test
    public void getByKeyValueCallsMapper() {
        aanvraagService.getByKeyValue("naamOpleiding", "adaptor 0.98765");
        verify(aanvraagMapperMock).mapAanvragen(chaincodeReturnArray);
    }
    @Test
    public void getHistoryCallsMapper() {
        aanvraagService.getHistory(id);
        verify(aanvraagMapperMock).mapAanvragen(chaincodeReturnArray);
    }


    // OBJECT OR ARRAY IS RETURNED


    @Test
    public void getByIdReturnsObject() {
        AanvraagDTO aanvraag = aanvraagService.getById(id);

        Assert.assertEquals(aanvraag.getClass(), AanvraagDTO.class);
        Assert.assertEquals(aanvraag.getAanvraagNummer(), id);
        Assert.assertEquals(aanvraag.getNaamOpleiding(), "adaptor 0.98765");
    }
    @Test
    public void getAllReturnsList() {
        List<AanvraagDTO> aanvragen = aanvraagService.getAll();

        Assert.assertEquals(aanvragen.getClass(), ArrayList.class);
        Assert.assertEquals(aanvragen.get(0).getClass(), AanvraagDTO.class);
        Assert.assertEquals(aanvragen.size(), mapperReturnArray.size());
    }
    @Test
    public void getByKeyValueReturnsList() {
        List<AanvraagDTO> aanvragen = aanvraagService.getByKeyValue("naamOpleiding", "adaptor 0.98765");

        Assert.assertEquals(aanvragen.getClass(), ArrayList.class);
        Assert.assertEquals(aanvragen.get(0).getClass(), AanvraagDTO.class);
        Assert.assertEquals(aanvragen.size(), mapperReturnArray.size());
    }
    @Test
    public void getHistoryReturnsListAndCallsMethods() {
        List<AanvraagDTO> aanvragen = aanvraagService.getHistory(id);

        Assert.assertEquals(aanvragen.getClass(), ArrayList.class);
        Assert.assertEquals(aanvragen.get(0).getClass(), AanvraagDTO.class);
        Assert.assertEquals(aanvragen.size(), mapperReturnArray.size());
    }


    // UNHAPPY FLOW

    // EXCEPTIONS ARE LOGGED


    @Test
    public void createPrintsException() throws ProposalException, InvalidArgumentException, InterruptedException, ExecutionException, TimeoutException {
        String[] args = new String[]{new Gson().toJson(mapperReturnSingle)};
        doThrow(e).when(chainQueryServiceMock).create(ChaincodeUtil.InvokeAction.invokeAanvraag, args);
        aanvraagService.create(mapperReturnSingle);
        verify(e).printStackTrace();
    }
    @Test
    public void getByIdPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryById(id);
        aanvraagService.getById(id);
        verify(e).printStackTrace();
    }
    @Test
    public void getAllPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryAll(DocType.ODB_AANVRAAG);
        aanvraagService.getAll();
        verify(e).printStackTrace();
    }
    @Test
    public void getByKeyValuePrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryByKeyValue(DocType.ODB_AANVRAAG, "naam", "test");
        aanvraagService.getByKeyValue("naam", "test");
        verify(e).printStackTrace();
    }
    @Test
    public void getHistoryPrintsException() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryObjectHistory(id);
        aanvraagService.getHistory(id);
        verify(e).printStackTrace();
    }


    // NULL IS RETURNED


    @Test
    public void getByIdReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryById(id);
        Assert.assertNull(aanvraagService.getById(id));
    }
    @Test
    public void getAllReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryAll(DocType.ODB_AANVRAAG);
        Assert.assertNull(aanvraagService.getAll());
    }
    @Test
    public void getByKeyValueReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryByKeyValue(DocType.ODB_AANVRAAG, "naam", "test");
        Assert.assertNull(aanvraagService.getByKeyValue("naam", "test"));
    }
    @Test
    public void getHistoryReturnsNull() throws ProposalException, InvalidArgumentException {
        doThrow(e).when(chainQueryServiceMock).queryObjectHistory(id);
        Assert.assertNull(aanvraagService.getHistory(id));
    }
}