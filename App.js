import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';

const Stack = createStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
    <StackView.Screen name="Home" component={HomeScreen}/>
    <StackView.reen name="SpaceCrafts" component={SpaceCraftsScreen} />  
    <StackView.Screen name="DailyPic" component={DailyPicScreen} />
    <StackView.Screen name="StarMap" component={StarMapScreen} />
    </StackView.Navigator>
   </NavigationContainer> 
  );
}

export default App;