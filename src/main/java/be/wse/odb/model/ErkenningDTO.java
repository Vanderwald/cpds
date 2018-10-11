package be.wse.odb.model;

import be.vlaanderen.odb.contract.erkenning.BlockchainErkenningDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ErkenningDTO extends BlockchainErkenningDTO implements Comparable<ErkenningDTO> {

    private Integer timestamp;
    private String dateAddedToChainString;

    @Override
    public int compareTo(ErkenningDTO o) {
        return o.getDateAddedToChainString().compareTo(getDateAddedToChainString());
    }
}
