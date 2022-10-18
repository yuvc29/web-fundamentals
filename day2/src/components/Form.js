import {Component} from 'react'
class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
        gitId: ''
      };
      
      this.handleName = this.handleName.bind(this);
      this.handleAge = this.handleAge.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleGitId = this.handleGitId.bind(this);
    }
  
    handleName(event) {
      this.setState({name: event.target.value});
    }
    handleAge(event) {
      this.setState({age: event.target.value});
    }
    handleEmail(event) {
      this.setState({email: event.target.value});
    }
    handleGitId(event) {
      this.setState({gitId: event.target.value});
    }
  
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleName} />
          </label>
          <label>
            Age:
            <input type="text" value={this.state.age} onChange={this.handleAge} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmail} />
          </label>
          <label>
            GitId:
            <input type="text" value={this.state.gitId} onChange={this.handleGitId} />
          </label>
          <input type="submit-" value="Submit" onSubmit={this.props.add(this.state)} />
        </form>
      );
    }
  }
export default  Form;
