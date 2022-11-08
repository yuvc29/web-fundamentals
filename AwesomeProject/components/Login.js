import React, { useState} from 'react';  
import {TextInput, Button, StyleSheet, Text, View} from 'react-native'; 
// import axios from 'axios';
const Login = (props)=>{
    const [mode, setMode] = useState("Log-In")
    const [name, setName] = useState({
        name:""
    })
    const [email, setEmail] = useState({
        email:"",
        error:""
    })
    const [password, setPassword] = useState({
        password:"",
        error:""
    })

    function emailChange (text){
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
        if(email.error !== 'Valid' || password.error !== 'Valid'){
            alert("Fill valid entries")
        }
        else {
            e.preventDefault();
            const payload = {email:email.email, password:password.password}
            // postUser(payload, navigation)
            props.nav.navigate('List', {email:email.email})
        }
    }
    function redirect(e){
        setMode(mode==="Log-In"?"Sign-In": "Log-In" )
    }
    return (
     
        <View style={[styles.container, styles.shadowProp]}>
            <Text style = {styles.header}>
                {mode}
            </Text>
          
            <View style = {styles.form}>
                {mode === "Sign-In" &&
                    (<View style={{ marginHorizontal:20}}>
                        <TextInput
                            style={styles.input}  
                            placeholder= "Your Name"
                            value={name.name}
                            onChangeText = {(text)=>setName(text)}
                        />
                        <Text>{name.error}</Text>
                    </View>)
                }
                <View style={{ marginHorizontal: 20}}>
                    <TextInput
                        style={styles.input}  
                        placeholder= "Your Email Id"
                        value={email.email}
                        onChangeText = {(text)=>emailChange(text)}
                    />
                    <Text>{email.error}</Text>
                </View>
                <View style={{ marginHorizontal: 20}}>
                    <TextInput style={styles.input} 
                        secureTextEntry={true} 
                        value={password.password} 
                        onChangeText = {passwordChange} 
                        placeholder= "Password"
                    />
                    <Text>{password.error}</Text>
                </View>
                <View  
                    style={styles.button}
                >
                    <Button
                        title= {mode}
                        color="#790C97"
                        // buttonStyle={{borderRadius:10}}
                        onPress={onSubmit}
                    />
                </View>
                <View style = {styles.newuser}>
                    {
                        mode==="Log-In"?
                        (<Text  >Don't have an account?&nbsp;
                            <Text style={{color: '#790C97'}} onPress = {redirect} >
                                Sign-In
                            </Text>
                        </Text>):
                        (<Text  >Already have an account?&nbsp;
                            <Text style={{color: '#790C97'}} onPress = {redirect} >
                                Log-In
                            </Text>
                        </Text>)
                    }
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
    else return "Valid"
}

function validatePassword(password) 
{

    if(password === "" )
    return "Cannot be Empty"
    else if(password.length < 8)
    return "Password too short"
    else if(password.length > 15)
    return "Password too long"
    else return "Valid"
}

// function postUser(payload , navigation){
//       let response = axios.post(`/login?username=${payload.email}&password=${payload.password}`)
//       .then((response) => response.json())
//       .then((data) => {
//           if(data.status === 200)
//           console.log("Api call error");
//       }).catch((error)=>{
//         alert("Invalid Credentials")
//         console.log("Api call error");
//      });
//   }

const styles = StyleSheet.create({  
    container: {  
      flex: 3,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
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
        flex:8,
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