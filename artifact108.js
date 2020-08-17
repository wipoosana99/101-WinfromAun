import React from 'react';
import {StyleSheet,Image, View, Text} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>billie eilish</Text>
        <View style={styles.top}/>
        <View style={styles.middle}/>
        <View style={styles.bottom}/>
        <Image style={styles.bb} 
        source={{uri:'https://cheezelooker.com/file_managers/uploads/file_managers/source/DAILY%20CULTURE/NOVEMBER%202019/BILLIE%20EILISH%20UO%20EXCLUSIVE/large.jpg'}}/>
      </View>
     
    )
  }
}
  
const styles = StyleSheet.create({
  bb:{
    width:450,
    height:450,
  },
  text:{
    textAlign:'center',
    fontSize:50,
    fontWeight:'bold',
    backgroundColor:'black',
    color:'#F8F8FF',
  },
  container:{
    flex:1,
    justifyContent:'space-between',
  },
  top:{
    flex:0.2,
    backgroundColor:'#ADFF2F',
    borderWidth:5,
    borderTopLeftRadius:90,
    borderBottomLeftRadius:90,
  },
  middle:{
    flex:0.2,
    backgroundColor:'#ADFF2F',
    borderWidth:5,
    borderTopLeftRadius:90,
    borderBottomLeftRadius:90,
  },
  bottom:{
    flex:0.2,
    backgroundColor:'#ADFF2F',
    borderWidth:5,
    borderTopLeftRadius:90,
    borderBottomLeftRadius:90,
  }
})