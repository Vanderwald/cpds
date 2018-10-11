package be.wse.odb.controller;

import be.wse.odb.exceptions.AanvraagNotFoundException;
import be.wse.odb.model.AanvraagDTO;
import be.wse.odb.service.AanvraagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/aanvraag")
@CrossOrigin(origins = "*")
public class AanvraagController {

    private final AanvraagService aanvraagService;

    @Autowired
    public AanvraagController(AanvraagService aanvraagService) {
        this.aanvraagService = aanvraagService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<AanvraagDTO> getAll() {
        return aanvraagService.getAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public AanvraagDTO getById(@PathVariable("id") String id) {
        AanvraagDTO result =  aanvraagService.getById(id);

        if (result != null)
            return result;
        else throw new AanvraagNotFoundException();
    }

    @RequestMapping(value = "", params = {"naamOpleiding"}, method = RequestMethod.GET)
    @ResponseBody
    public List<AanvraagDTO> getByCourseName(@RequestParam("naamOpleiding") String naamOpleiding) {
        return aanvraagService.getByKeyValue("naamOpleiding", naamOpleiding);
    }


    @RequestMapping(value = "/history/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<AanvraagDTO> getHistoryById(@PathVariable("id") String id) {
        System.out.println(id);
        return aanvraagService.getHistory(id);
    }

}
