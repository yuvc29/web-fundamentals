import React, {useEffect, useState} from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Realm from "realm";
import { getAllTodo } from '../db/Realm';



const List = ({route, navigation }) => {
    

    const [toggle, setToggle] = useState("Todo")
    const date = new Date().toLocaleDateString()
    const [user, setUser] = useState("")
    
    
    // const [todoList, setTodoList] = useState(realm.objects("Todo"))
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        setPendingTodos(getAllTodo())
      }, [])

    useEffect(()=>{
        if(route.params?.email){
            setUser(route.params.email)
        }
        if(route.params?.title)
            setTodoList(
                [
                    ...todoList, {
                        title:route.params.title,
                        dueDate:new Date(route.params.dueDate),
                        body: "",
                        status:'incomplete'
                    }
                ]
            )
    }, [route.params?.email, route.params?.title])
    
    const statusWiseList = (todo)=>{
        if(toggle === 'Todo')return true;
        else if(toggle === 'Doing')return todo.status === 'incomplete'
        return todo.status === 'complete'
    }

    const swap = (value)=>{
        const change = value.status === 'incomplete'?'complete':'incomplete' ;
        const obj =  todoList.map((todo)=>{
            if(todo.title === value.title)return {...value, status:change}
            return todo
        })
        return obj
    }
    return (
        <View style={styles.layer0}>
        <View style={styles.header}>
            <Text style={{fontSize:25, fontWeight:'bold', color: 'white'}} >Hi {user}</Text>
        </View>
        
        <View style = {styles.listContainer}>
            <ScrollView style = {{marginTop : 60}}>
                <SafeAreaView style = {styles.list}>
                {
                    
                    todoList.filter(statusWiseList).map(
                        (value)=>(
                            <View style = {{ margin:5,  backgroundColor:'white', alignItems:'center', flexDirection:'row', width:370, borderRadius:5, height:100}}>
                                <View style = {[{flex:1,  height:100, backgroundColor:'green', borderTopLeftRadius: 5, borderBottomLeftRadius:5}, value.status === 'incomplete' && {backgroundColor:'yellow'},]}>
                                </View>
                                <View style = {{flex:35,  height:100, alignItems:'center', justifyContent:'center', backgroundColor:'silver'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{value.dueDate}</Text>
                                </View>
                                <View style = {{flex:50, alignItems:'flex-start', justifyContent:'center', height:100, padding:10}}>
                                <Text style={{fontSize:20,  color:'black'}}>{value.title}</Text>
                                </View>
                                <View style = {{flex:30, backgroundColor:'silver', alignItems:'flex-start', justifyContent:'center', height:100, padding:10}}>
                                <Text onPress = {()=>setTodoList(swap(value)) } style={[{fontSize:20,  color:'black'}]  }>{value.status}</Text>
                                </View>
                            </View> 
                        )
                    )
                }
                </SafeAreaView>
            </ScrollView>
            {/* <Flatlist 
                style = {styles.list}
                data = {todoList}
                renderItem = {}
            /> */}
        </View>

        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute', bottom:'5%', right:'5%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Add', {navigation:navigation})}>
                    <View style={{flexDirection:'row', backgroundColor:'#5E23C2',height:50, width:50, borderRadius:25}}>
                    </View>
            </TouchableOpacity>
       </View>


        <View style={styles.statusContainer}>
            <View style={styles.status}>
                <TouchableOpacity style = {{ flex: 1, justifyContent:'center', alignItems: 'center'}}
                    onPress={()=> setToggle('Todo')}>
                    <View >
                        <Text style = {[{fontSize:18, fontWeight:'bold'}, toggle === 'Todo' && {color:'#5E23C2' } ]} >To Do</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setToggle('Doing')}
                    style = {{ flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <Text style = {[{fontSize:18, fontWeight:'bold'}, toggle === 'Doing' && {color:'#FCED11' } ]}>Doing</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> setToggle('Done')}
                    style = {{ flex: 1, justifyContent:'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent:'center', alignItems: 'center',}}>
                        <Text style = {[{fontSize:18, fontWeight:'bold'}, toggle === 'Done' && {color:'#60DC03' } ]}>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
       </View>
      </View>
    );
  }


export default List

const styles = StyleSheet.create({  
    layer0: { 
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#5E23C2',
    },
    header: {
      flex: 1,
      backgroundColor:'#5E23C2',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    nav: {
      fontWeight:'bold',
      fontSize:30,
      borderColor: "1D9D5D",
      borderWidth: 1,
      position: 'absolute',
      bottom:'10%',
      right:'10%'
    },
    listContainer:{
        flex:4,
        backgroundColor:'#ECECEC',
        borderTopEndRadius:30,
        borderTopStartRadius:30
    },
    list:{
        flex:1,
        flexDirection:'column',
        alignItems: 'center', 
    },
    statusContainer:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center', 
        position:'absolute', 
        bottom:'75%',

    },
    status:{
        justifyContent:'center', 
        alignItems: 'center', 
        flex: 1, 
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:15,
        height:75, 
        width:300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    todoContainer:{
        margin:5,
        backgroundColor:'blue'
    }
  });
