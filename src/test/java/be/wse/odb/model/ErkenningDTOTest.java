package be.wse.odb.model;

import be.wse.odb.util.TestObjectFileReader;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class ErkenningDTOTest {

    private List<ErkenningDTO> mapperReturnArray;


    @Before
    public void setUp() throws IOException {
        this.mapperReturnArray = TestObjectFileReader.getErkenningenMapped();
    }

    @Test
    public void canSortByDate() {

        ErkenningDTO erkenning2018 = mapperReturnArray.get(0);
        ErkenningDTO erkenning2050 = mapperReturnArray.get(1);

        Collections.sort(mapperReturnArray);

        Assert.assertTrue(mapperReturnArray.indexOf(erkenning2050) < mapperReturnArray.indexOf(erkenning2018));

    }


}
