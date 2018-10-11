package be.wse.odb.util;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.properties.PropertyValueEncryptionUtils;
import org.springframework.stereotype.Component;

@Component
public class EncryptionUtil {

    private static StringEncryptor configurationEncryptor;


    public EncryptionUtil(StringEncryptor configurationEncryptor) {
        EncryptionUtil.configurationEncryptor = configurationEncryptor;
    }

    public static String encrypt(String value) {
        return PropertyValueEncryptionUtils
                .encrypt(value, configurationEncryptor);
    }

    public static String decrypt(String value) {
        return PropertyValueEncryptionUtils
                .decrypt(value, configurationEncryptor);
    }
}
