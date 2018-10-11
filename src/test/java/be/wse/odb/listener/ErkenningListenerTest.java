package be.wse.odb.listener;

import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.service.ErkenningService;
import be.wse.odb.util.TestObjectFileReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.io.IOException;

import static org.mockito.Mockito.*;


public class ErkenningListenerTest {

    @Mock
    private ObjectMapper objectMapper;
    @Mock
    private ErkenningService erkenningService;
    @Mock
    private ErkenningDTO emptyErkenningDTO;

    @InjectMocks
    private ErkenningListener erkenningListener;

    private String stringErkenning;

    @Before
    public void setUp() throws IOException {
        MockitoAnnotations.initMocks(this);
        this.stringErkenning = TestObjectFileReader.getErkenningStringFromListener();
        this.emptyErkenningDTO = new ErkenningDTO();

        doReturn(emptyErkenningDTO).when(objectMapper).readValue(stringErkenning, ErkenningDTO.class);
        doNothing().when(erkenningService).create(emptyErkenningDTO);
    }

    @Test
    public void mapsIntoErkenningDTO() throws IOException {
        erkenningListener.receiveMessage(stringErkenning);
        verify(objectMapper).readValue(stringErkenning, ErkenningDTO.class);
    }

    @Test
    public void callsCreateInErkenningService() throws IOException {
        erkenningListener.receiveMessage(stringErkenning);
        verify(erkenningService).create(emptyErkenningDTO);
    }
}
