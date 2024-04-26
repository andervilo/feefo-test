package com.feefo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

class JobTitleNormaliserTest {

    Normaliser n;

    @BeforeEach
    void setup (){
        n = new Normaliser();
        //Provide Normalised Title List
        n.setNormalizedTitles(Arrays.asList("Architect", "Software engineer", "Accountant"));
    }

    @Test
    void testNormalise() {
        String jt = "Java engineer";

        String result = n.normalise(jt);
        Assertions.assertEquals("Software engineer", result);

        jt = "C# engineer";
        result = n.normalise(jt);
        Assertions.assertEquals("Software engineer", result);

        jt = "Chief Accountant";
        result = n.normalise(jt);
        Assertions.assertEquals("Accountant", result);

        jt = "Solution architect";
        result = n.normalise(jt);
        Assertions.assertEquals("Architect", result);
    }

    @Test
    void testNormalise_shouldReturnNull() {
        String jt = "Devops manager";
        String result = n.normalise(jt);
        Assertions.assertNull(result);
    }
}
