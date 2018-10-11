package be.wse.odb.config;

import be.vlaanderen.middle.api.document.dossier.client.DocumentDownloadClientImpl;
import be.wse.odb.util.EncryptionUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "ftp.provdev")
public class FTPConfig {
    private String protocol;
    private String host;
    private String basePath;
    private String username;
    private String password;

    public DocumentDownloadClientImpl getClient() {
        return new DocumentDownloadClientImpl(
                new be.vlaanderen.middle.api.document.dossier.client
                        .FtpProperties(
                        getProtocol(),
                        getHost(),
                        getBasePath(),
                        getUsername(),
                        EncryptionUtil.decrypt(getPassword())));
    }
}
