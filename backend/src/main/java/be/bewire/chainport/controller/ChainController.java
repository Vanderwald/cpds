package be.bewire.chainport.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class ChainController {

    // request op /invoke/{fcn} --> fcn = functie uit te voeren
    // body van request = params om te gebruiken voor de function
    // String [] args = new String[] {new Gson().toJson(....)} (gewoon [ <hier stringified JSON van de body> ]
    // ChainService.invoke(fcn, args);

    // zelfde voor /query/{fcn} --> ook post en ChainService.query(fcn, args);
}
