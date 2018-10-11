package be.wse.odb.integration;

import be.wse.odb.listener.ErkenningListener;
import be.wse.odb.model.ErkenningDTO;
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
public class ErkenningIntegrationTest {

    @Autowired
    private ErkenningListener erkenningListener;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @Rule
    public JUnitRestDocumentation jUnitRestDocumentation = new JUnitRestDocumentation();

    private ErkenningDTO erkenningDTO;

    @Before
    public void setUp() throws IOException {
        String stringErkenning = TestObjectFileReader.getErkenningStringFromListener();
        this.erkenningDTO = new ObjectMapper().readValue(stringErkenning, ErkenningDTO.class);

        mockMvc = MockMvcBuilders
                .webAppContextSetup(context)
                .apply(documentationConfiguration(this.jUnitRestDocumentation))
                .build();

        erkenningListener.receiveMessage(stringErkenning);
    }

    @Test
    public void getAllErkenningenShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/erkenning"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("erkenning"));
    }

    @Test
    public void getErkenningByIdShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/erkenning/" + erkenningDTO.getErkenning().getErkenningsnummer()))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("erkenning/{id}"));
    }

    @Test
    public void getErkenningHistoryShouldReturnOk() throws Exception {
        this.mockMvc.perform(RestDocumentationRequestBuilders.get("/api/erkenning/history/"  + erkenningDTO.getErkenning().getErkenningsnummer()))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andDo(document("erkenning/history/{id}"));
    }

}
