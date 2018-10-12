package be.bewire.chainport.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Value;

@Value
public class ShipmentDto {
    private String id;
    @JsonIgnore
    private String docType = "SHIPMENT";
    private String startingPort;
    private String endPort;
    private String startingTimestamp;
    private String endingTimestamp;
    private String ship;
    private String cargo;
}
