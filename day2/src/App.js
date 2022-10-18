import './App.css';
import Users from './Users';
import Form from './components/Form';
import {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list :[
        {
            name : "John",
            age : 23,
            email : "John.Doe@gmail.com",
            gitId : "John"
        },
        {
            name: "Jane",
            age : 32,
            email : "Jane.Doe@gmail.com",
            gitId : "Jane"

        }
      ]
    }
  }
  add = (user)=>{
    this.state.list.push(user);
  }
  render(){
    return (
      <div className="App">
        <Form add = {this.add}/>
        <Users list = {this.state.list}/>
      </div>
    );
  }
}

export default App;
