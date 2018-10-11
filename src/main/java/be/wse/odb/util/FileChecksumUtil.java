package be.wse.odb.util;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class FileChecksumUtil {

    public String getChecksumForInputStream(InputStream inputStream) throws NoSuchAlgorithmException {
        //Use MD5 algorithm
        MessageDigest md5Digest = MessageDigest.getInstance("MD5");

        //Get the checksum
        String checksum = null;

        try {
            checksum = generateChecksum(md5Digest, inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return checksum;
    }

    private String generateChecksum(MessageDigest digest, InputStream inputStream) throws IOException {
        //Create byte array to read data in chunks
        byte[] byteArray = new byte[1024];
        int bytesCount = 0;

        //Read file data and update in message digest
        while ((bytesCount = inputStream.read(byteArray)) != -1) {
            digest.update(byteArray, 0, bytesCount);
        }

        //close the stream; We don't need it now.
        inputStream.close();

        //Get the hash's bytes
        byte[] bytes = digest.digest();

        //This bytes[] has bytes in decimal format;
        //Convert it to hexadecimal format
        StringBuilder sb = new StringBuilder();
        for (byte aByte : bytes) {
            sb.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));
        }

        //return complete hash
        return sb.toString();
    }

}
