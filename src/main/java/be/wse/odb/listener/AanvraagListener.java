package be.wse.odb.listener;

import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.service.AanvraagService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@Log4j
public class AanvraagListener {
    private static final String JMS_DESTINATION = "Consumer.ODB.VirtualTopic.ErkenningAanvragenODB";
    // private static final Logger LOGGER = LoggerFactory.getLogger(AanvraagListener.class);
    private final ObjectMapper jmsObjectMapper;
    private final AanvraagService aanvraagService;

    @Autowired
    public AanvraagListener(final ObjectMapper jmsObjectMapper, final AanvraagService aanvraagService) {
        this.jmsObjectMapper = jmsObjectMapper;
        this.aanvraagService = aanvraagService;
    }

    @JmsListener(destination = JMS_DESTINATION, concurrency = "1-5", containerFactory = "jmsListenerContainerFactory")
    public void receiveMessage(String aanvraag) throws IOException {

        final AanvraagDTO aanvraagDTO = jmsObjectMapper.readValue(aanvraag, AanvraagDTO.class);
        log.info("Received AANVRAAG on jms QUEUE " + JMS_DESTINATION);
        this.aanvraagService.create(aanvraagDTO);
    }
}