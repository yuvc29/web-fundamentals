import  {Component} from 'react'

class Test extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <div>{this.props.list.length}</div>
    }
}

export default  Test;