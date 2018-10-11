package be.wse.odb.model;

import be.wse.odb.util.TestObjectFileReader;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class AanvraagDTOTest {

    private List<AanvraagDTO> mapperReturnArray;


    @Before
    public void setUp() throws IOException {
        this.mapperReturnArray = TestObjectFileReader.getAanvragenMapped();
    }

    @Test
    public void canSortByDate() {

        AanvraagDTO aanvraag2018 = mapperReturnArray.get(0);
        AanvraagDTO aanvraag2050 = mapperReturnArray.get(1);

        Collections.sort(mapperReturnArray);

        Assert.assertTrue(mapperReturnArray.indexOf(aanvraag2050) < mapperReturnArray.indexOf(aanvraag2018));
    }


}
