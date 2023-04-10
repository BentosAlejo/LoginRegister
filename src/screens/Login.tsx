
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Login() {
  const navigation = useNavigation()
  return (
    <View>
        <Text>login</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text>here</Text></TouchableOpacity>
    </View>
  );
}

export default Login;