import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown=False }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown=False }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
