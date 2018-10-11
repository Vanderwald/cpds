package be.wse.odb.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Aanvraag niet gevonden")
public class AanvraagNotFoundException extends RuntimeException {
}
