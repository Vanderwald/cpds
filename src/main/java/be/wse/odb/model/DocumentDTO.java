package be.wse.odb.model;

import be.vlaanderen.middle.api.document.dossier.dto.RemoteDocumentDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DocumentDTO {

    private RemoteDocumentDto details;
    private String checksum;

    public DocumentDTO(RemoteDocumentDto remoteDocumentDto, String checksum) {
        this.details = remoteDocumentDto;
        this.checksum = checksum;
    }
}
