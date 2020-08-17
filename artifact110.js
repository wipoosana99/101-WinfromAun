import React from 'react';
import {StyleSheet, View, Dimensions,Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box,styles.box1}/>
        <View style={styles.box,styles.box2}/>
        <View style={styles.box,styles.box3}/>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
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
})