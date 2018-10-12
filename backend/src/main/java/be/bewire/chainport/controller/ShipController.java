package be.bewire.chainport.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import be.bewire.chainport.controller.dto.ShipDto;
import be.bewire.chainport.service.ChainService;

@RestController
public class ShipController {
    private final ChainService chainService;
    private final ObjectMapper mapper;

    public ShipController(ChainService chainService, ObjectMapper mapper) {
        this.chainService = chainService;
        this.mapper = mapper;
    }

    @PostMapping(value = "/ship", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createShip(@RequestBody ShipDto ship) throws Exception {
        this.chainService.invoke(
                "createShip",
                new String[]{mapper.writeValueAsString(ship)});
    }
}
