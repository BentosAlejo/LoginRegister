import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'




const Stack = createStackNavigator()

const MainStack = ()=>{
    return(
                <NavigationContainer>
                    <Stack.Navigator >
                        <Stack.Screen name='Home' component={Home}/>
                        <Stack.Screen name='Login' component={Login}/>
                        <Stack.Screen name='Register' component={Register}/>
                    </Stack.Navigator>
                </NavigationContainer>

    )
}

export default MainStack

