import React from 'react';
import {  Text } from 'react-native';
import { StyleSheet, View} from 'react-native';
import Login from './components/Login.js'
const Cat = ({navigation}) => {
  return (
    <View  style = {styles.layer0}>
      <View style = {styles.layer1}>
        <Text style = {styles.layer2}>To Do App</Text>
      </View>
      <Login nav = {navigation}/>
    </View>
  );
}

export default Cat;

const styles = StyleSheet.create({  
  layer0: { 
    flex: 1,
    backgroundColor: '#9A9A9A',
  },
  layer1: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: '#9A9A9A',
  },
  layer2: {
    fontWeight:'bold',
    fontSize:30,
    color:'#000000',
  }
});