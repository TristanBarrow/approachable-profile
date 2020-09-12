import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainProfile from './components/MainProfile.jsx';
import EditProfile from './components/EditProfile.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name=''
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};

export default App;
