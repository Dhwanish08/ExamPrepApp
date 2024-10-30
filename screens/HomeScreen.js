import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { sections } from '../data/SampleData';

const HomeScreen = ({ navigation }) => (
  <View>
    <FlatList
      data={sections}
      keyExtractor={(item) => item.title}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Section', { sectionIndex: index })}>
          <Text style={{ padding: 20, fontSize: 18 }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default HomeScreen;
