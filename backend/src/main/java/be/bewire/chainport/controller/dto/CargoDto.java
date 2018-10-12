package be.bewire.chainport.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Value;

@Value
public class CargoDto {
    private String id;
    @JsonIgnore
    private String docType = "CARGO";
    private String type;
    private String weight;
    private String containerCount;
}
