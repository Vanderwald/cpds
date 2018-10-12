package be.bewire.chainport.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Value;

@Value
public class PortDto {
    private String id;
    @JsonIgnore
    private String docType = "PORT";
    private String city;
    private String country;
    private String name;
}
