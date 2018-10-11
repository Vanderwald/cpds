package be.wse.odb.model;

import be.vlaanderen.odb.contract.aanvraag.OdbAanvraagDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties (value = { "contactpersoon" })
public class AanvraagDTO extends OdbAanvraagDto implements Comparable<AanvraagDTO> {
    private List<DocumentDTO> hashedDocs = new ArrayList<>();

    private Integer timestamp;
    private String dateAddedToChainString;

    @Override
    public int compareTo(AanvraagDTO o) {
        return o.getDateAddedToChainString().compareTo(getDateAddedToChainString());
    }
}
