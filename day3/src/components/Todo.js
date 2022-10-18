import { useState } from 'react';
function Todo(props) {
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(props.todo[props.field]);
// console.log(props.field)
  function toggleInput() {
    setToggle(!toggle);
  }

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleUpdate(e){
    e.preventDefault();
    const newTodo = {...props.todo}
    newTodo[props.field] = text
    const newList = props.todoList.map((todo)=>{
        if(todo.title === newTodo.title)return newTodo;
        return todo;
    })
    props.updateList(newList)
    toggleInput();
  }

  return (
    <div className="App">
      {toggle ? (
        <ul onDoubleClick={toggleInput}>{props.field}:    {props.todo[props.field]}</ul>
      ) : (
        <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Todo
