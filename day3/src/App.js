import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import ListTodo from './components/ListTodo'
function App() {
    const [todoList, setTodoList] = useState([]);
    
    useEffect(() => {getList(setTodoList)}, []);

    const add = (todo) =>{
        setTodoList([...todoList, todo])
    }
    const updateList = (newList) =>{
        // console.log(newList)
        setTodoList(newList)
    }
    return (
        <div>
            <Form add = {add} todoList = {todoList}/>
            {
                todoList?
                <ListTodo todoList = {todoList} updateList = {updateList}/> :
                <p>Waiting...</p>
            }
        </div>
    )
}

const getList = async (setTodoList) => {
    const res = await fetch("http://localhost:8080/todo/getlist?user=John.Doe@gmail.com");
    const data = await res.json();
    const newList = data.map((todo) =>{
        const {title: title, body: body, dueDate : dueTime, status: status} = todo
        return {title, body, dueTime, status}
    })
    setTodoList(newList);
};


export default App;
