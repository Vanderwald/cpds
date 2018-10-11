package be.wse.odb.util;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class FileChecksumUtilTest {

    private FileChecksumUtil fileChecksumUtil;

    @Before
    public void setup() {
        this.fileChecksumUtil = new FileChecksumUtil();
    }

    @Test
    public void checkPdfChecksums() throws Exception {
        List<String> checksums = getMultipleChecksums(
                new String[]{"initial/testfile.pdf", "different/testfile.pdf", "same/testfile.pdf"});

        Assert.assertEquals(checksums.get(0), checksums.get(2));
        Assert.assertNotEquals(checksums.get(0), checksums.get(1));
    }

    @Test
    public void checkJpgChecksums() throws Exception {
        List<String> checksums = getMultipleChecksums(
                new String[]{"initial/wse_logo.jpg", "different/wse_logo.jpg", "same/wse_logo.jpg"});

        Assert.assertEquals(checksums.get(0), checksums.get(2));
        Assert.assertNotEquals(checksums.get(0), checksums.get(1));
    }

    @Test
    public void checkDocxChecksums() throws Exception {
        List<String> checksums = getMultipleChecksums(
                new String[]{"initial/example.docx", "different/example.docx", "same/example.docx"});

        Assert.assertEquals(checksums.get(0), checksums.get(2));
        Assert.assertNotEquals(checksums.get(0), checksums.get(1));
    }

    private List<String> getMultipleChecksums(String[] filenames) throws FileNotFoundException, NoSuchAlgorithmException {
        List<String> checksums = new ArrayList<>();

        for (String fileName : filenames) {
            ClassLoader classLoader = getClass().getClassLoader();
            File file = new File(Objects.requireNonNull(classLoader.getResource("checksumTestFiles/" + fileName)).getFile());
            FileInputStream fis = new FileInputStream(file);
            checksums.add(fileChecksumUtil.getChecksumForInputStream(fis));

        }

        return checksums;
    }


}
