package be.wse.odb.mapper;

import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.util.DateUtil;
import com.google.gson.Gson;
import org.springframework.stereotype.Component;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Component
public class AanvraagMapper {

    public AanvraagDTO mapAanvraag(JsonObject aanvraag) {
        AanvraagDTO aanvraagDTO = new Gson().fromJson(aanvraag.toString(), AanvraagDTO.class);
        aanvraagDTO.setDateAddedToChainString(DateUtil.timestampToString(aanvraagDTO.getTimestamp()));
        return aanvraagDTO;
    }

    public List<AanvraagDTO> mapAanvragen(JsonArray aanvragenArray) {
        if (aanvragenArray != null) {
            List<AanvraagDTO> aanvraagDtoList = new ArrayList<>();
            for (int i = 0 ; i < aanvragenArray.size() ; i++) {
                aanvraagDtoList.add( mapAanvraag(aanvragenArray.getJsonObject(i).get("Record").asJsonObject()));
            }
            Collections.sort(aanvraagDtoList);
            return aanvraagDtoList;
        }
        return null;
    }
}
