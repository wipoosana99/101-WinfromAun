import React from 'react';
import {View,Text} from 'react-native';

export default function App(){
  return(
      <View style={{
        flexDirection:"row",
        height:100,
        padding:20
      }}>
        <View style={{backgroundColor:"blue",flex:0.3}}></View>
        <View style={{backgroundColor:"red",flex:0.5}}></View>
        <Text>I LOVE MY DOG</Text>
        <Text>HOW YOU LIKE THAT</Text>
      </View>
    )
}
