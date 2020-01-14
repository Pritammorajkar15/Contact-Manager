import React from 'react'
// import Axios from 'axios'

// import '../../App.css'
import {connect} from 'react-redux'
import {StartRegisterUser} from '../../actions/users'
import {Jumbotron} from 'reactstrap'
 class Register extends React.Component{
    constructor(){
        super()


this.state={
   username:'' ,
   email:'',
   password:''

}   
 }
 handleChange=(e)=>{
     this.setState({
         [e.target.name]:e.target.value
     })
 }
 handleSubmit=(e)=>{
     e.preventDefault()
    const formData={
    username:this.state.username,
    email:this.state.email,
    password:this.state.password
    }
    this.props.dispatch(StartRegisterUser(formData,this.props))
    // Axios.post('http://localhost:3025/users/register',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
    // .then((response)=>{
    //     if(response.data.hasOwnProperty('error')){
    //         alert(response.data.message)
    //     }
    //     else{
    //         alert('successfully registered')
    //         this.props.history.push('/users/login')
    //     }
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
 }
 render(){
     return(
        <div align="center" className="row">
        <div className="col-md-6 offset-md-3" >
            {/* <div className="jumbotron"> */}
                 <br></br>
             <Jumbotron style={{"background":"none"}}>
             <h2>Register</h2>
             <form onSubmit={this.handleSubmit}>
                 <label>Username:
                 <br></br>
                 <input type='text'  className="form-control"  value={this.state.username} onChange={this.handleChange} name='username'/>
                 </label>
                 <br></br>
                 <label>Email:
                 <br></br>
                 <input type='text'  className="form-control" value={this.state.email} onChange={this.handleChange} name='email'/>
                 </label>
                 <br></br>
                 <label>Password:
                 <br></br>
                 <input type='password' className="form-control" value={this.state.password} onChange={this.handleChange} name='password'/>
                 </label>
                 <br></br>
<input type="submit" className="btn btn-primary"/>
             </form>
            </Jumbotron>
             </div>
         </div>
     )
 }
}
export default connect()(Register)