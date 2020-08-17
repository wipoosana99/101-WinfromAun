import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
     <View style={styles.container}>
       <Text style={styles.text}>HELLO BOYS</Text> 
       <Image style={styles.boy} 
        source={require('./assets/TheBoysPoster-Web.jpg')}/>
       <Image 
       style={{width:900, height:480}}
       source={{uri:'https://www.seriesdoofree.com/wp-content/uploads/2019/08/The-Boys-Season-1-M.jpg'}}
       />
      

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
  },
  boy:{
    width:250,
    height:250,
  }
})