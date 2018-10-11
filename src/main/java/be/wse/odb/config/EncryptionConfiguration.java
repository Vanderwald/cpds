package be.wse.odb.config;

import org.jasypt.encryption.pbe.config.StringPBEConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig;

@Configuration
public class EncryptionConfiguration {
    @Bean
    public StringPBEConfig stringPBEConfig() {
        final EnvironmentStringPBEConfig environmentStringPBEConfig = new EnvironmentStringPBEConfig();
        environmentStringPBEConfig.setAlgorithm("PBEWithMD5AndDES");
        environmentStringPBEConfig.setPassword("MyVoiceIsMyPassportPleaseVerifyMe");
        return environmentStringPBEConfig;
    }

    @Bean
    public StandardPBEStringEncryptor encryptor(final StringPBEConfig stringPBEConfig) {
        final StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setConfig(stringPBEConfig);
        return encryptor;
    }
}
