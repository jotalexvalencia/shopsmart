import { View, Text } from 'react-native';
import React from 'react';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// sreens
import Home from './screens/Home';
import Details from './screens/Details';


export type RootStackParametersList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackParametersList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title: "Discounted smartphones",
          animation: 'slide_from_left',
             
        }}
      />
      <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title: "Smartphone Details",
          animation: 'slide_from_bottom',
         
        }}
      />
      </Stack.Navigator>      
    </NavigationContainer>
  )
}

export default App