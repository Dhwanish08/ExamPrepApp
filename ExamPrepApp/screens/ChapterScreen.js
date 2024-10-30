import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { sections } from '../data/SampleData';

const ChapterScreen = ({ route }) => {
  const { sectionIndex, subjectIndex, chapterIndex } = route.params;
  const questions = sections[sectionIndex].subjects[subjectIndex].chapters[chapterIndex].questions;

  return (
    <View>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => `question-${index}`}
        renderItem={({ item }) => (
          <Text style={{ padding: 20, fontSize: 18 }}>{item}</Text>
        )}
      />
    </View>
  );
};

export default ChapterScreen;
