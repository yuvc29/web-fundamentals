import  {Component} from 'react'

class Users extends Component{
    render(){
        return (
        <div>
            {
                this.props.list.map( (user) => 
                <li>
                    {
                        Object.keys(user).map( (key)=>
                            <div>
                                {key} : {user[key]}
                            </div>

                        )
                    }
                </li>
                )
            }
        </div>
        )
    }
}

export default  Users;