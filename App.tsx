
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';



import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Register from './src/screens/Register';


const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


function App({ navigation }: { navigation: HomeScreenNavigationProp}) {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;