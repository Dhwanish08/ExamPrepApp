import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { sections } from '../data/SampleData';

const SubjectScreen = ({ route, navigation }) => {
  const { sectionIndex, subjectIndex } = route.params;
  const chapters = sections[sectionIndex].subjects[subjectIndex].chapters;

  return (
    <View>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Chapter', { sectionIndex, subjectIndex, chapterIndex: index })}>
            <Text style={{ padding: 20, fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SubjectScreen;