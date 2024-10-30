import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SectionScreen from './screens/SectionScreen';
import SubjectScreen from './screens/SubjectScreen';
import ChapterScreen from './screens/ChapterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Sections' }} />
        <Stack.Screen name="Section" component={SectionScreen} options={{ title: 'Subjects' }} />
        <Stack.Screen name="Subject" component={SubjectScreen} options={{ title: 'Chapters' }} />
        <Stack.Screen name="Chapter" component={ChapterScreen} options={{ title: 'Questions' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}