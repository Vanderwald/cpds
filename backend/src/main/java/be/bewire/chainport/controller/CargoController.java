package be.bewire.chainport.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import be.bewire.chainport.controller.dto.CargoDto;
import be.bewire.chainport.controller.dto.PortDto;
import be.bewire.chainport.service.ChainService;

@RestController
public class CargoController {
    private final ChainService chainService;
    private final ObjectMapper mapper;

    @Autowired
    public CargoController(ChainService chainService, ObjectMapper mapper) {
        this.chainService = chainService;
        this.mapper = mapper;
    }

    @PostMapping(value = "/cargo", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createCargo(@RequestBody CargoDto cargo) throws Exception {
        this.chainService.invoke(
                "createCargo",
                new String[]{mapper.writeValueAsString(cargo)});
    }
}
