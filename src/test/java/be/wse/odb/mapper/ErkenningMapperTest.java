package be.wse.odb.mapper;

import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.util.TestObjectFileReader;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.json.JsonArray;
import javax.json.JsonValue;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

public class ErkenningMapperTest {

    private ErkenningMapper erkenningMapper = new ErkenningMapper();
    ErkenningMapper erkenningMapperSpy = spy(erkenningMapper);


    private JsonArray blockchainReturnJson;


    @Before
    public void setUp() throws IOException {
        this.blockchainReturnJson = TestObjectFileReader.getErkenningenBlockChain();
    }

    @Test
    public void mapsIndividualErkenningen() {
        erkenningMapperSpy.mapErkenningen(blockchainReturnJson);

        for (JsonValue jsonValue : blockchainReturnJson) {
            verify(erkenningMapperSpy, atLeastOnce()).mapErkenning(jsonValue.asJsonObject().getJsonObject("Record").asJsonObject());
        }
    }

    @Test
    public void returnsListOfErkenningDTO() {
        Assert.assertEquals(erkenningMapperSpy.mapErkenningen(blockchainReturnJson).getClass(), ArrayList.class);
        Assert.assertEquals(erkenningMapperSpy.mapErkenningen(blockchainReturnJson).get(0).getClass(), ErkenningDTO.class);
    }

    @Test
    public void timestampsAreMadeIntoStringDates() {
        List<ErkenningDTO> mapped = erkenningMapperSpy.mapErkenningen(blockchainReturnJson);

        for (ErkenningDTO erkenningDTO : mapped) {
            Assert.assertNotNull(erkenningDTO.getDateAddedToChainString());
            Assert.assertNotEquals(erkenningDTO.getDateAddedToChainString(), "");
        }
    }

    @Test
    public void returnsNullIfEmptyListWasGiven() {
        JsonArray emptyBlockChainReturn = null;
        List<ErkenningDTO> erkenningen = erkenningMapperSpy.mapErkenningen(emptyBlockChainReturn);
        Assert.assertNull(erkenningen);

    }


}
