package be.wse.odb.util;

import be.wse.odb.util.ChaincodeUtil.DocType;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;



public class ChaincodeUtilTest {

    ChaincodeUtil chaincodeUtil = new ChaincodeUtil();

    @Before
    public void setup() {
    }

    @Test
    public void selectAllReturnsChaincodeQuery()  {
        String query = ChaincodeUtil.selectAllQuery(DocType.ODB_ERKENNING);
        Assert.assertEquals(query, "{\"selector\":{\"docType\":\"ODB_ERKENNING\"}}");
    }

    @Test
    public void selectByKeyValueReturnsChaincodeQuery() {
        String query = ChaincodeUtil.selectByKeyValueQuery(DocType.ODB_ERKENNING, "key", "value");
        Assert.assertEquals(query, "{\"selector\":{\"docType\":\"ODB_ERKENNING\", \"key\":\"value\"}}");
    }
}
