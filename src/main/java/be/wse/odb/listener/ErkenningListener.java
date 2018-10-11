package be.wse.odb.listener;

import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.service.ErkenningService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@Log4j
public class ErkenningListener {
    private static final String JMS_DESTINATION = "ODB.BLOCKCHAIN";
    private final ObjectMapper jmsObjectMapper;
    private final ErkenningService erkenningService;

    @Autowired
    public ErkenningListener(final ObjectMapper jmsObjectMapper, final ErkenningService erkenningService) {
        this.jmsObjectMapper = jmsObjectMapper;
        this.erkenningService = erkenningService;
    }

    @JmsListener(destination = JMS_DESTINATION, concurrency = "1-5", containerFactory = "jmsListenerContainerFactory")
    public void receiveMessage(String erkenning) throws IOException {
        
        final ErkenningDTO erkenningDTO = jmsObjectMapper.readValue(erkenning, ErkenningDTO.class);
        log.info("Received ERKENNING on jms QUEUE " + JMS_DESTINATION);
        this.erkenningService.create(erkenningDTO);

    }
}