package be.wse.odb.integration;

import be.wse.odb.listener.AanvraagListener;
import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.util.TestObjectFileReader;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.restdocs.JUnitRestDocumentation;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.io.IOException;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.documentationConfiguration;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
@Ignore
public class AanvraagIntegrationTest {

    @Autowired
    private AanvraagListener aanvraagListener;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @Rule
    public JUnitRestDocumentation jUnitRestDocumentation = new JUnitRestDocumentation();

    private AanvraagDTO aanvraagDTO;

    @Before
    public void setUp() throws IOException {
        String stringAanvraag = TestObjectFileReader.getAanvraagStringFromListener();
        this.aanvraagDTO = new ObjectMapper().readValue(stringAanvraag, AanvraagDTO.class);

        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(documentationConfiguration(this.jUnitRestDocumentation))
                .build();

        aanvraagListener.receiveMessage(stringAanvraag);
    }

    @Test
    public void getAllAanvragenShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/aanvraag"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("aanvraag"));
    }

    @Test
    public void getAanvraagByIdShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/aanvraag/" + aanvraagDTO.getAanvraagNummer()))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("aanvraag/{id}"));
    }

    @Test
    public void getAanvraagHistoryShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/aanvraag/history/"  + aanvraagDTO.getAanvraagNummer()))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("aanvraag/history/{id}"));
    }

}
