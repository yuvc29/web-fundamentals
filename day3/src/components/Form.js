import React, { useState } from "react";
// import DateTimePicker from 'react-datetime-picker';
// import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
// import Input from './Input'                  <Input type = "text" field = "title" todo = {todo} setTodo = {setTodo}/>
function Form(props){
    const [todo, setTodo] = useState({
        title : "",
        body : "",
        dueTime : "",
        status : "incomplete"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const sameTitle = props.todoList.filter((curTodo)=>{
            return todo.title === curTodo.title 
        })
        if(todo.title.length === 0)alert("Title cannot be empty")
        else if (sameTitle.length > 0)alert("Same Title not allowed")
        else props.add({...todo})

        postTodo(todo, setTodo);
    }
    return (
        <form>
            <label>Title:
                <input 
                type = "text"
                value = {todo.title}
                onChange = {(e) => setTodo({...todo,title:e.target.value }) }
                />
            </label>
            <label>Body:
                <input 
                type = "text"
                value = {todo.body}
                onChange = {(e) => setTodo({...todo,body:e.target.value }) }
                />
            </label>
            <label>Due Time:
                <input 
                type = "text"
                value = {todo.dueTime}
                onChange = {(e) => setTodo({...todo,dueTime:e.target.value }) }
                />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default Form
/*
*/
// <DateTimePickerComponent value = {dueTime} onChange = {setDueTime}/>

function postTodo(todo, setTodo){
    fetch('http://localhost:8080/todo/create', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(todo)
    
  })
    //  .then((response) => response.json())
    //  .then((data) => {
    //     console.log(data);
    //     setTodo(data)
    //     // Handle data
    //  })
}