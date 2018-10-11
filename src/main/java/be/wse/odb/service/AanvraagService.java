package be.wse.odb.service;

import be.vlaanderen.middle.api.document.dossier.dto.RemoteDocumentDto;
import be.wse.odb.exceptions.AanvraagNotFoundException;
import be.wse.odb.mapper.AanvraagMapper;
import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.model.DocumentDTO;
import be.wse.odb.util.ChaincodeUtil.InvokeAction;
import be.wse.odb.util.ChaincodeUtil.DocType;
import be.wse.odb.util.FileChecksumUtil;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.json.JsonArray;
import javax.json.JsonObject;
import java.io.InputStream;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class AanvraagService {

    private final ChainQueryService chainQueryService;
    private final AanvraagMapper aanvraagMapper;
    private final DownloadDocumentService downloadDocumentService;
    private final FileChecksumUtil fileChecksumUtil;

    @Autowired
    public AanvraagService(ChainQueryService chainQueryService, FileChecksumUtil fileChecksumUtil, DownloadDocumentService downloadDocumentService, AanvraagMapper aanvraagMapper) {
        this.chainQueryService = chainQueryService;
        this.fileChecksumUtil = fileChecksumUtil;
        this.downloadDocumentService = downloadDocumentService;
        this.aanvraagMapper = aanvraagMapper;
    }

    public void create(AanvraagDTO aanvraagDTO) {
        try {
            calculateDocumentHashes(aanvraagDTO);
            String [] args = new String[] {new Gson().toJson(aanvraagDTO)};
            chainQueryService.create(InvokeAction.invokeAanvraag, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public AanvraagDTO getById(String id) {
        try {
            JsonObject result = chainQueryService.queryById(id).getJsonObject("Record").asJsonObject();
            if (result != null) return aanvraagMapper.mapAanvraag(result);
            else throw new AanvraagNotFoundException();
        } catch (Exception e)  {
            e.printStackTrace();
            return null;
        }
    }

    public List<AanvraagDTO> getAll() {
        try {
            JsonArray result = chainQueryService.queryAll(DocType.ODB_AANVRAAG);
            return aanvraagMapper.mapAanvragen(result);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    public List<AanvraagDTO> getByKeyValue(String key, String value) {
        try {
            JsonArray result = chainQueryService.queryByKeyValue(DocType.ODB_AANVRAAG, key, value);
            return aanvraagMapper.mapAanvragen(result);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<AanvraagDTO> getHistory(String id) {
        try {
            JsonArray result = chainQueryService.queryObjectHistory(id);
            return aanvraagMapper.mapAanvragen(result);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private void calculateDocumentHashes(AanvraagDTO aanvraagDTO) throws NoSuchAlgorithmException {
        for (RemoteDocumentDto remoteDocumentDto: aanvraagDTO.getDocumenten()) {
            InputStream inputStream = downloadDocumentService.downloadDocument(aanvraagDTO.getDocumenten().get(0).getUri());
            String checksum = fileChecksumUtil.getChecksumForInputStream(inputStream);
            aanvraagDTO.getHashedDocs().add(new DocumentDTO(remoteDocumentDto, checksum));
        }
    }
}
