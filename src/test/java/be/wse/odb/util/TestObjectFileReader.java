package be.wse.odb.util;

import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.model.ErkenningDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonStructure;
import java.io.*;
import java.util.List;

public class TestObjectFileReader {
    // AANVRAGEN

    public static JsonArray getAanvragenBlockChain() throws IOException {
        return new TestObjectFileReader().readJsonFile("aanvragenBlockchain.json").asJsonArray();
    }
    public static List<AanvraagDTO> getAanvragenMapped() throws IOException {
        JsonArray json = new TestObjectFileReader().readJsonFile("aanvragenMapped.json").asJsonArray();
        return new ObjectMapper().readValue(json.toString(), new TypeReference<List<AanvraagDTO>>() {
        });
    }
    public static String getAanvraagStringFromListener() throws IOException {
        return new TestObjectFileReader().readJsonFile("aanvraagStringListener.json").asJsonObject().toString();
    }

    // ERKENNINGEN

    public static JsonArray getErkenningenBlockChain() throws IOException {
        return new TestObjectFileReader().readJsonFile("erkenningenBlockchain.json").asJsonArray();
    }
    public static List<ErkenningDTO> getErkenningenMapped() throws IOException {
        JsonArray json = new TestObjectFileReader().readJsonFile("erkenningenMapped.json").asJsonArray();
        return new ObjectMapper().readValue(json.toString(), new TypeReference<List<ErkenningDTO>>() {
        });
    }
    public static JsonArray getErkenningenArrayJson() throws IOException {
        return new TestObjectFileReader().readJsonFile("erkenningenMapped.json").asJsonArray();
    }
    public static String getErkenningStringFromListener() throws IOException {
        return new TestObjectFileReader().readJsonFile("erkenningStringListener.json").asJsonObject().toString();
    }


    private JsonStructure readJsonFile(String fileName) throws IOException {
        File file = new File(getClass().getClassLoader().getResource(fileName).getPath());
        InputStream inputStream = new FileInputStream(file);

        StringBuilder resultStringBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
            String line;
            while ((line = br.readLine()) != null) {
                resultStringBuilder.append(line).append("\n");
            }
        }
        String data = resultStringBuilder.toString();
        return Json.createReader(new ByteArrayInputStream(data.getBytes())).read();
    }
}
