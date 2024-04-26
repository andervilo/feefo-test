package com.feefo;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class Normaliser {
    private List<String> normalizedTitles;
    private Double maxScore;
    private String jobTitle;

    public Normaliser() {
        fullReset();
    }

    private void fullReset() {
        resetMaxScore();
        resetJobTitle();
    }
    private void resetJobTitle() {
        this.jobTitle = null;
    }

    private void resetMaxScore() {
        this.maxScore = 0.0;
    }

    public void setNormalizedTitles(List<String> normalizedTitles) {
        this.normalizedTitles = normalizedTitles;
    }

    public String normalise(String inputTitle) {
        fullReset();
        processNormalise(inputTitle);
        return jobTitle;
    }

    private void processNormalise(String inputTitle) {
        Set<String> fromInput = getWordsFromString(inputTitle);
        normalizedTitles.forEach(title -> {
            Set<String> fromList= getWordsFromString(title);
            Double score = getScore(fromInput, fromList);
            processScore(score, title);
        });
    }

    private void processScore(Double score, String title) {
        if (score > 1) score = Math.floor(score);
        if (score < 0) score = Math.ceil(score);
        if (score > maxScore) {
            maxScore = score;
            jobTitle = title;
        }
    }

    private Set<String> getWordsFromString(String input){
        return Arrays.stream(input.toLowerCase().split("\\s+")).collect(Collectors.toSet());
    }

    private Integer getTotalCommonWords(Set<String> wordsFromInput, Set<String> wordsFromList){
        Set<String> intersection = new HashSet<>(wordsFromList);
        intersection.retainAll(wordsFromInput);
        return intersection.size();
    }

    private Double getScore(Set<String> wordsFromInput, Set<String> wordsFromList){
        Integer totalCommonWords = getTotalCommonWords(wordsFromInput, wordsFromList);
        return totalCommonWords.doubleValue() / Integer.valueOf(wordsFromList.size()).doubleValue();
    }
}
