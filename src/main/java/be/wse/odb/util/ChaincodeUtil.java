package be.wse.odb.util;

public class ChaincodeUtil {

    public enum DocType { ODB_AANVRAAG, ODB_ERKENNING };

    public enum InvokeAction { invokeAanvraag, invokeErkenning, }

    public enum QueryAction { queryById, richQuery, getHistoryByKey }

    public static String selectAllQuery(DocType docType) {
        return "{\"selector\":{\"docType\":\"" + docType.toString() + "\"}}";
    }

    public static String selectByKeyValueQuery(DocType docType, String key, String value) {
        return "{\"selector\":{\"docType\":\"" + docType.toString() + "\", \"" + key + "\":\"" + value + "\"}}";
    }
}
