package be.wse.odb.mapper;

import be.wse.odb.model.AanvraagDTO;
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

public class AanvraagMapperTest {

    private AanvraagMapper aanvraagMapper = new AanvraagMapper();
    private AanvraagMapper aanvraagMapperSpy = spy(aanvraagMapper);


    private JsonArray blockchainReturnJson;


    @Before
    public void setUp() throws IOException {
        this.blockchainReturnJson = TestObjectFileReader.getAanvragenBlockChain();
    }

    @Test
    public void mapsIndividualAanvragen() {
        aanvraagMapperSpy.mapAanvragen(blockchainReturnJson);

        for (JsonValue jsonValue : blockchainReturnJson) {
            verify(aanvraagMapperSpy, atLeastOnce()).mapAanvraag(jsonValue.asJsonObject().getJsonObject("Record").asJsonObject());
        }
    }

    @Test
    public void returnsListOfAanvraagDTO() {
        Assert.assertEquals(aanvraagMapperSpy.mapAanvragen(blockchainReturnJson).getClass(), ArrayList.class);
        Assert.assertEquals(aanvraagMapperSpy.mapAanvragen(blockchainReturnJson).get(0).getClass(), AanvraagDTO.class);
    }

    @Test
    public void timestampsAreMadeIntoStringDates() {
        List<AanvraagDTO> mapped = aanvraagMapperSpy.mapAanvragen(blockchainReturnJson);

        for (AanvraagDTO aanvraagDTO : mapped) {
            Assert.assertNotNull(aanvraagDTO.getDateAddedToChainString());
            Assert.assertNotEquals(aanvraagDTO.getDateAddedToChainString(), "");
        }
    }

    @Test
    public void returnsNullIfEmptyListWasGiven() {
        JsonArray emptyBlockChainReturn = null;
        List<AanvraagDTO> aanvragen = aanvraagMapperSpy.mapAanvragen(emptyBlockChainReturn);
        Assert.assertNull(aanvragen);

    }


}
