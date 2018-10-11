package be.wse.odb.util;

import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Component
public class DateUtil {
    private static DateTimeFormatter dateFormatter() {
        return DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
    }

    private static LocalDateTime timeStampToLocalDateTime(Integer timestamp) {
        Instant instant = Instant.ofEpochMilli((long) timestamp*1000);
        return instant.atZone(ZoneId.systemDefault()).toLocalDateTime();
    }

    public static String timestampToString(Integer timestamp) {
        LocalDateTime d = timeStampToLocalDateTime(timestamp);
        return d.format(DateUtil.dateFormatter());
    }
}
