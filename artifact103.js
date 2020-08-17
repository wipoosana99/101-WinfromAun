import React from 'react';
import {View,Text} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'I LOVE MY DOG',//initial data
      text:'HOW YOU LIKE THAT',
    }
  }

  render(){
    return(
      <View>
        <Text>I LOVE MY DOG</Text>
        <Text>HOW YOU LIKE THAT</Text>
      </View>
    )
  }
}