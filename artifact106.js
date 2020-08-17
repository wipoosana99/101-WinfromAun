import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
     <View style={styles.container}>
       <Text style={styles.text}>HELLO BOYS</Text>
     </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#006400',
    backgroundColor:'#FFB6C1',
    padding:10,
    fontSize:24,
  }
})