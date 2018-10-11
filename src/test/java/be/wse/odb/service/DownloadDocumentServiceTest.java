package be.wse.odb.service;

import be.vlaanderen.middle.api.document.dossier.client.DocumentDownloadClient;
import be.vlaanderen.middle.api.document.dossier.client.DocumentDownloadClientImpl;
import be.vlaanderen.middle.api.document.dossier.client.FtpProperties;
import be.wse.odb.config.FTPConfig;
import be.wse.odb.util.EncryptionUtil;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import static org.mockito.Mockito.*;

public class DownloadDocumentServiceTest {

    @Mock
    private FTPConfig ftpConfigMock;
    @Mock
    private DocumentDownloadClientImpl documentDownloadClientMock;
    @Mock
    private IOException ioException;

    @InjectMocks
    private DownloadDocumentService downloadDocumentService;

    public DownloadDocumentServiceTest() {

    }

/*    @Before
    public void setUp() throws IOException {
        MockitoAnnotations.initMocks(this);

        DocumentDownloadClientImpl mockClient = new DocumentDownloadClientImpl(new FtpProperties(
                        "sftp://",
                        "1.1.1.1",
                        "/basepath",
                        "username",
                        "password"));


        when(ftpConfigMock.getClient()).thenReturn(mockClient);

        InputStream is = new ByteArrayInputStream("test data".getBytes());
        when(mockClient.downloadFile("uri")).thenReturn(is);

    }

    @Test
    public void serviceCanConfigureFTP() throws IOException {

        downloadDocumentService.downloadDocument("uri");

        verify(ftpConfigMock).getHost();
        verify(ftpConfigMock).getUsername();
        verify(ftpConfigMock).getPassword();
        verify(ftpConfigMock).getBasePath();
        verify(ftpConfigMock).getProtocol();
    }

    @Test
    public void serviceCanDownload() throws IOException {
        downloadDocumentService.downloadDocument("uri");
        verify(documentDownloadClientMock).downloadFile("uri");
    }*/

}
