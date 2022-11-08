import React, { useState} from 'react';  
import { TextInput, Button, StyleSheet, Text, View} from 'react-native'; 
// import axios from 'axios';
import { postTodo } from '../db/Realm';
import DatePicker from 'react-native-date-picker';


const Form = ({navigation})=>{
    const [title, setTitle] = useState({
        title:"",
        error:"Empty"
    })
    const [date, setDate] = useState(new Date())

    function titleChange (text){
        setTitle({
            title:text,
            error:validateTitle(text)
        })
    }
    function onSubmit(e){
        e.preventDefault();
        if(title.error !== "Valid" )alert("Choose a Valid title")
        else if(date < new Date())alert("pick a future date")
        else {
            postTodo(title, date.toString(), "incomplete", "")
            navigation.navigate({
                name:'List',
                params:{
                    title:title.title,
                    dueDate:date.toString()
                },
                merge:true
            })
        }
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
                        value={title.title}
                        onChangeText = {(text)=>titleChange(text)}
                    />
                    <Text >{title.error}</Text>
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


function validateTitle(title) 
{
    if(title === "" )
    return "Cannot be Empty"
    else if(title.length > 25)
    return "Title too long"
    else return "Valid"
}

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