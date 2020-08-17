import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>billie eilish</Text>
        <View style={styles.box,styles.box1}/>
        <View style={styles.box,styles.box2}/>
        <View style={styles.box,styles.box3}/>
        <Image style={styles.bb} 
        source={{uri:'https://cheezelooker.com/file_managers/uploads/file_managers/source/DAILY%20CULTURE/NOVEMBER%202019/BILLIE%20EILISH%20UO%20EXCLUSIVE/large.jpg'}}/>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'black',
    color:'#F8F8FF',
  },
  box:{
    margin:15,
    borderWidth:2,
    borderRadius:20,
  },
  box1:{
    flex:1,
    backgroundColor:'#ADFF2F',
    borderColor:'dreen',
  },
  box2:{
    flex:2,
    backgroundColor:'#CD5C5C',
    borderColor:'red',
  },
  box3:{
    flex:3,
    backgroundColor:'#87CEFA',
    borderColor:'blue',
  },
  bb:{
    width:450,
    height:450,
  },
})