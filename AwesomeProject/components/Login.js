import React, {Component, useState} from 'react';  
import {TextInput, Button, StyleSheet, Text, View} from 'react-native'; 
import { Form, FormItem } from 'react-native-form-component';
//import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//type Props = {};  
//export default class Login extends Component<Props>{
const Login = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style = {styles.header}>
                Login
            </Text>
            <View style = {styles.form}>
                <TextInput style={styles.input} 
                    placeholder= "Email"
                    value={email}
                />
                <TextInput style={styles.input} placeholder= "Password"/>
                <View  
                    style={styles.button}
                    value={password}
                >
                    <Button
                        title="Submit"
                        color="#f194ff"
                        borderRadius
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>
                <Text></Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({  
    container: {  
      flex: 2,
      borderRadius: 20,
      justifyContent: 'center',  
      alignItems: 'center',  
      backgroundColor: '#FFFFFF',
    },
    shadowProp: {
        shadowColor: '#21794D',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    header: {
        flex:1,
        fontSize:40,
        padding:10,
        color:'#000000',
    },
    form: {
        flex:4,
        fontSize:30,
        padding:20,
    },
    input: {
        margin: 20,
        width: 300,
        borderColor:'#000000',
        borderWidth: 1,
        padding:10,
    },
    button: {
        margin:20,
        borderRadius:7
    }
  });  

  export default Login