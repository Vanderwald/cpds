package be.bewire.chainport.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Value;

@Value
public class ShipDto {
    private String id;
    @JsonIgnore
    private String docType = "SHIP";
    private String modelNumber;
    private String owner;
}
