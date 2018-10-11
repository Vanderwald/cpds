package be.wse.odb.controller;

import be.wse.odb.exceptions.ErkenningNotFoundException;
import be.wse.odb.model.ErkenningDTO;
import be.wse.odb.service.ErkenningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/erkenning")
@CrossOrigin(origins = "*")
public class ErkenningController {

    private final ErkenningService erkenningService;

    @Autowired
    public ErkenningController(ErkenningService erkenningService) {
        this.erkenningService = erkenningService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<ErkenningDTO> getAll() {
        return erkenningService.getAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public ErkenningDTO getById(@PathVariable("id") String id) throws ErkenningNotFoundException {
        ErkenningDTO result =  erkenningService.getById(id);

        if (result != null) return result;
        else throw new ErkenningNotFoundException();
    }

    @RequestMapping(value = "/history/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<ErkenningDTO> getHistoryById(@PathVariable("id") String id) {
        return erkenningService.getHistory(id);
    }

}
