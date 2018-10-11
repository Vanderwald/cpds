package be.wse.odb.listener;

import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.service.AanvraagService;
import be.wse.odb.util.TestObjectFileReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.io.IOException;

import static org.mockito.Mockito.*;


public class AanvraagListenerTest {

    @Mock
    private ObjectMapper objectMapper;
    @Mock
    private AanvraagService aanvraagService;
    @Mock
    private AanvraagDTO emptyAanvraagDTO;

    @InjectMocks
    private AanvraagListener aanvraagListener;

    private String stringAanvraag;

    @Before
    public void setUp() throws IOException {
        MockitoAnnotations.initMocks(this);
        this.stringAanvraag = TestObjectFileReader.getAanvraagStringFromListener();
        this.emptyAanvraagDTO = new AanvraagDTO();

        doReturn(emptyAanvraagDTO).when(objectMapper).readValue(stringAanvraag, AanvraagDTO.class);
        doNothing().when(aanvraagService).create(emptyAanvraagDTO);
    }

    @Test
    public void mapsIntoAanvraagDTO() throws IOException {
        aanvraagListener.receiveMessage(stringAanvraag);
        verify(objectMapper).readValue(stringAanvraag, AanvraagDTO.class);
    }

    @Test
    public void callsCreateInAanvraagService() throws IOException {
        aanvraagListener.receiveMessage(stringAanvraag);
        verify(aanvraagService).create(emptyAanvraagDTO);
    }
}
