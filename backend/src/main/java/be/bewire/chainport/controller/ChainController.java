package be.bewire.chainport.controller;

import org.hyperledger.fabric.sdk.exception.InvalidArgumentException;
import org.hyperledger.fabric.sdk.exception.ProposalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.json.JsonStructure;

import be.bewire.chainport.service.impl.ChainServiceImpl;

@RestController
@Deprecated
public class ChainController {
    private final ChainServiceImpl chainService;

    @Autowired
    public ChainController(ChainServiceImpl chainService) {
        this.chainService = chainService;
    }

    @PostMapping(value = "/query/{fcn}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public JsonStructure invokeQuery(
            @RequestBody JsonStructure query,
            @PathVariable(name = "fcn") String function) throws InvalidArgumentException, ProposalException {
        return chainService.query(function, query.toString());
    }
}
