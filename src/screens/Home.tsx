import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'




function Home() {
  const navigation = useNavigation()
  return (
   
        <View style={styles.container}>
         <Text>HOMEEEE</Text>
         <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text>here</Text></TouchableOpacity>

        </View>
   
  );
}

export default Home;

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop:300
    }
})


// type RootStackParamList = {
//   Home: undefined;
//   Login: undefined;
  
// };