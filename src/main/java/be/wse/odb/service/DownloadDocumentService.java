package be.wse.odb.service;

import be.vlaanderen.middle.api.document.dossier.client.DocumentDownloadClient;
import be.vlaanderen.middle.api.document.dossier.client.DocumentDownloadClientImpl;
import be.vlaanderen.dwse.config.impl.DomainConfigServiceImpl;
import be.wse.odb.config.FTPConfig;
import be.wse.odb.util.EncryptionUtil;
import org.apache.xmlbeans.impl.xb.xsdownload.impl.DownloadedSchemasDocumentImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;

@Component
public class DownloadDocumentService {

    private final FTPConfig ftpConfig;

    @Autowired
    public DownloadDocumentService(FTPConfig ftpConfig) {
        this.ftpConfig = ftpConfig;
    }

    InputStream downloadDocument(final String uri) {
        try {
            return ftpConfig.getClient().downloadFile(uri);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


}
