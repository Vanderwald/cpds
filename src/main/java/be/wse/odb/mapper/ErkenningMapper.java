package be.wse.odb.mapper;


import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.util.DateUtil;
import com.google.gson.Gson;
import org.springframework.stereotype.Component;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class ErkenningMapper {
    public ErkenningDTO mapErkenning(JsonObject erkenning) {
        ErkenningDTO erkenningDTO = new Gson().fromJson(erkenning.toString(), ErkenningDTO.class);
        erkenningDTO.setDateAddedToChainString(DateUtil.timestampToString(erkenningDTO.getTimestamp()));
        return erkenningDTO;
    }

    public List<ErkenningDTO> mapErkenningen(JsonArray result) {
        if (result != null) {
            List<ErkenningDTO> erkenningDtoList = new ArrayList<>();
            for (int i = 0; i < result.size(); i++) {
                erkenningDtoList.add(mapErkenning(result.getJsonObject(i).get("Record").asJsonObject()));
            }
            Collections.sort(erkenningDtoList);
            return erkenningDtoList;
        }
        return null;
    }

}

