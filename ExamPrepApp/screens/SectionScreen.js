import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { sections } from '../data/SampleData';

const SectionScreen = ({ route, navigation }) => {
  const { sectionIndex } = route.params;
  const subjects = sections[sectionIndex].subjects;

  return (
    <View>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Subject', { sectionIndex, subjectIndex: index })}>
            <Text style={{ padding: 20, fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SectionScreen;
