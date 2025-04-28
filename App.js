import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screens/HomeScreen';
import DetailsScreen from './scr/screens/DetailScreen';
import ProfileScreen from './scr/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" >
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Details" component = {DetailsScreen} />
        <Stack.Screen name = "Profile" component = {ProfileScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

