
import React from 'react'
//import axios from 'axios'
// import '../../App.css'
import {Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/users'
 class Login extends React.Component{
    constructor(){
        super()
        this.state={
            password:'',
            email:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            password:this.state.password,
            email:this.state.email
        }
        this.props.dispatch(startLoginUser(formData,this.props))
        // axios.post('http://localhost:3025/users/login', formData)
        // .then((response)=>{
        //    console.log(response.data)
        //     if(!response.data.hasOwnProperty('errors')){
        //       console.log('in here',formData, response.data)
        //         localStorage.setItem('authToken', response.data.token)
        //         this.props.history.push('/contacts')
        //     }else{
        //         console.log(response.data.message)
        //     }
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div align="center" className="row">
                <div className="col-md-6 offset-md-3" >
                   
                    <br></br>
                 
                    <Jumbotron style={{"background":"none"}}>
                <h2>Login</h2>
                <form onSubmit={this.submit} >
                    <label>Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.change} className="form-control"/>
                        <br></br>
                    </label>
                    <br/><br/>
                    <label>Password
                        <br></br>
                        <input type="password" name="password" value={this.state.password} onChange={this.change} className="form-control"/>
                    </label>
                    <br/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </Jumbotron>
                </div>
            </div>
        )
    }
}
export default connect()(Login)