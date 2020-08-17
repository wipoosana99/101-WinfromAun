import React from 'react';
import {StyleSheet, View, Dimensions,} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box,styles.box1}/>
        <View style={styles.box,styles.box2}/>
      </View>
     
    )
  }
}
const{height,width}=Dimensions.get('window'); 
const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
  },
  box:{
    position:'absolute',
    borderWidth:2,
    borderRadius:20,
  },
  box1:{
    width:width*1,
    height:height*(1/3),
    backgroundColor:'#ADFF2F',
    borderColor:'dreen',
  },
  box2:{
    top:'33.33',
    width:'100%',
    height:'33.33%',
    backgroundColor:'#CD5C5C',
    borderColor:'red',
  }
})