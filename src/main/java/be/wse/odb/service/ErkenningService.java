package be.wse.odb.service;

import be.wse.odb.exceptions.ErkenningNotFoundException;
import be.wse.odb.mapper.ErkenningMapper;
import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.util.ChaincodeUtil.DocType;
import be.wse.odb.util.ChaincodeUtil.InvokeAction;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.util.List;

@Service
public class ErkenningService {

    private final ChainQueryService chainQueryService;
    private final ErkenningMapper erkenningMapper;

    @Autowired
    public ErkenningService(ChainQueryService chainQueryService, ErkenningMapper erkenningMapper) {
        this.chainQueryService = chainQueryService;
        this.erkenningMapper = erkenningMapper;
    }

    public void create(ErkenningDTO erkenningDTO) {
        try {
            String [] args = new String[] {new Gson().toJson(erkenningDTO)};
            chainQueryService.create(InvokeAction.invokeErkenning, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ErkenningDTO getById(String id) {
        try {
            JsonObject result = chainQueryService.queryById(id).getJsonObject("Record");
            if (result != null) return erkenningMapper.mapErkenning(result);
            else throw new ErkenningNotFoundException();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ErkenningDTO> getAll() {
        try {
            JsonArray result = chainQueryService.queryAll(DocType.ODB_ERKENNING);
            return erkenningMapper.mapErkenningen(result);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<ErkenningDTO> getHistory(String id) {
        try {
            JsonArray result = chainQueryService.queryObjectHistory(id);
            return erkenningMapper.mapErkenningen(result);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
