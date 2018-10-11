package be.wse.odb.config;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@EnableConfigurationProperties
@NoArgsConstructor
@ConfigurationProperties(prefix = "hlf")
public class HLFConfig {
    private String username;
    private String channelName;
    private String chaincodeId;
    private String affiliation;
    private String mspId;
    private String caUrl;
    private String queryAllCourses;
}
