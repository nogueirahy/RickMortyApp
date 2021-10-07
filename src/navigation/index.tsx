import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
