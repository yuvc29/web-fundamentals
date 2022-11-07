import React, { useState} from 'react';  
import {TextInput, Button, StyleSheet, Text, View} from 'react-native'; 
// import axios from 'axios';
const Login = (props)=>{
    const [email, setEmail] = useState({
        email:"",
        error:""
    })
    const [password, setPassword] = useState({
        password:"",
        error:""
    })

    function emailChange (text){
        //validateEmail(text, setEmail)
        setEmail({
            email:text,
            error:validateEmail(text)
        })

    }
    function passwordChange(text){
        setPassword({
            password:text, 
            error:validatePassword(text)
        })
    }
    function onSubmit(e){
        props.nav.navigate('Details', {email:email.email})
        // e.preventDefault();
        // const payload = {email:email.email, password:password.password}
        // console.log("onSubmit")
        // postUser(payload, navigation)
    }
    function redirect(e){

    }
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style = {styles.header}>
                Log-In
            </Text>
          
            <View style = {styles.form}>
                <View style={{margin: 20}}>
                    <TextInput
                        style={styles.input}  
                        placeholder= "Your Email Id"
                        value={email.email}
                        onChangeText = {(text)=>emailChange(text)}
                    />
                    <Text>{email.error}</Text>
                </View>
                <View style={{margin: 20}}>
                    <TextInput style={styles.input} 
                        secureTextEntry={false} 
                        value={password.password} 
                        onChange = {passwordChange} 
                        placeholder= "Password"
                    />
                    <Text>{password.error}</Text>
                </View>
                <View  
                    style={styles.button}
                >
                    <Button
                        title="Login"
                        color="#790C97"
                        // buttonStyle={{borderRadius:10}}
                        onPress={onSubmit}
                    />
                </View>
                <View style = {styles.newuser}>
                    <Text  >Don't have an account?&nbsp;
                        <Text style={{color: '#790C97'}} onPress = {redirect} >
                            Sign-In
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
        
    )
}


function validateEmail(email) 
{
    if(email === "" )
    return "Cannot be Empty"
    else if(email.length > 25)
    return "Email too long"
    else if(/\S+@\S+\.\S+/.test(email) === false)return "Invalid Email"
}

function validatePassword(password) 
{

    if(password === "" )
    return "Cannot be Empty"
    else if(password.length < 8)
    return "Password too short"
    else if(password.length > 15)
    return "Password too long"
}

// function postUser(payload , navigation){
//       let response = axios.post(`/login?username=${payload.email}&password=${payload.password}`)
//       .then((response) => response.json())
//       .then((data) => {
//           //if(data.status == 200)navigation.navigate('Details')
//           console.log(data.status)
//       }).catch((error)=>{
//         console.log("Api call error");
//      });
//   }

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
        flex:5,
        fontSize:30,
        padding:20,
    },
    input: {
        //borderBottomColor:'#000000',
        borderColor:'#000000',
        borderBottomWidth: 1,
    },
    button: {
        margin:20,
        borderRadius:19,
        overflow:"hidden",
        backgroundColor: "black",
        alignSelf:"center",
        height: 40,
        width:300
    },
    newuser: {
        alignSelf :'center'
    }
  });  

  export default Login