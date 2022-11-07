import React, { useState} from 'react';  
import { TextInput, Button, StyleSheet, Text, View} from 'react-native'; 
// import axios from 'axios';
import DatePicker from 'react-native-date-picker';
const Form = ({navigation})=>{
    const [email, setEmail] = useState({
        email:"",
        error:"Empty"
    })
    const [date, setDate] = useState(new Date())

    function emailChange (text){
        //validateEmail(text, setEmail)
        setEmail({
            email:text,
            error:validateEmail(text)
        })

    }
    function onSubmit(e){
        e.preventDefault();
        if(email.error !== "Valid" )alert("Choose a Valid title")
        else if(date < new Date())alert("pick a future date")
        else navigation.navigate({
            name:'Details',
            params:{
                title:email,
                dueDate: date
            },
            merge:true
        })
        // const payload = {email:email.email, password:password.password}
        // console.log("onSubmit")
        // postUser(payload, navigation)
    }
    return (
        <View style={[styles.listContainer, styles.shadowProp]}>
            <Text style = {styles.header}>
                Add New ToDo
            </Text>
          
            <View style = {styles.form}>
                <View style = {{ marginHorizontal:20, marginBottom :100}}>
                    <TextInput
                        style={styles.input}  
                        placeholder= "Todo Title"
                        value={email.email}
                        onChangeText = {(text)=>emailChange(text)}
                    />
                    <Text >{email.error}</Text>
                </View>
                <DatePicker date={date} onDateChange={setDate} style = {{ marginBottom :50}}/>
                <View  
                    style={styles.button}
                >
                    <Button
                        title="Add"
                        color="#790C97"
                        // buttonStyle={{borderRadius:10}}
                        onPress={onSubmit}
                    />
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
    return "Title too long"
    else return "Valid"
}
// function validatePassword(password) 
// {
//     if(password.length < 8)
// }

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
    listContainer: {  
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
        align:'center'
    },


  });  

  export default Form