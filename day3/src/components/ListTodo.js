import Todo from './Todo'
function ListTodo(props){
    const removeTodo = (toDelete) =>{
        deleteTodo(toDelete)
        return props.todoList.filter((todo) => {return todo.title !== toDelete.title})
    }
    return (
        <div>
        {
            props.todoList.map((todo) => 
                <li>
                    {
                        Object.keys(todo).map(
                            (key) => {
                                if(key === 'title')return <ul>Title: {todo[key]}</ul>
                                else return <Todo todo = {todo} field = {key} todoList = {props.todoList} updateList = {props.updateList}/>
                            }
                        )
                    }
                    <button onClick = 
                        {
                            (e)=>
                            {
                                e.preventDefault();
                                props.updateList(removeTodo(todo))
                                //console.log(props.todoList)
                            }
                        }>Delete
                    </button>
                </li>
            )
        }
        <button>Save</button>
        </div>
    )
}

const deleteTodo = async (todo)=>{
    const res = await fetch("http://localhost:8080/todo/delete?user="+"John.Doe@gmail.com+"+todo.title, {method: 'DELETE'});
    const data = await res.json();
    console.log(data);
}

export default ListTodo