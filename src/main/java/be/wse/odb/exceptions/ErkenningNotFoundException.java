package be.wse.odb.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Erkenning niet gevonden")
public class ErkenningNotFoundException extends RuntimeException {
}
