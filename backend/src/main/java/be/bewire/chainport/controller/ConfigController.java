package be.bewire.chainport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import be.bewire.chainport.config.HLFConfig;

@RestController
public class ConfigController {
    private final HLFConfig hlfConfig;

    @Autowired
    public ConfigController(HLFConfig hlfConfig) {
        this.hlfConfig = hlfConfig;
    }

    @GetMapping(value = "/config", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public HLFConfig getConfig() {
        return hlfConfig;
    }
}
