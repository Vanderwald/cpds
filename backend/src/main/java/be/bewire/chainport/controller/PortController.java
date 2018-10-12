package be.bewire.chainport.controller;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import be.bewire.chainport.controller.dto.PortDto;
import be.bewire.chainport.service.ChainService;

@RestController
public class PortController {
    private final ChainService chainService;
    private final ObjectMapper mapper;

    @Autowired
    public PortController(ChainService chainService, ObjectMapper mapper) {
        this.chainService = chainService;
        this.mapper = mapper;
    }

    @PostMapping(value = "/port", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createPort(@RequestBody PortDto port) throws Exception {
        this.chainService.invoke(
                "createPort",
                new String[]{mapper.writeValueAsString(port)});
    }
}
