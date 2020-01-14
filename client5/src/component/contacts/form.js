import React from 'react'
import Axios from 'axios'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name:'',
            email:props.email ? props.email:'',
            number:props.number ? props.number:''
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
            name:this.state.name,
            email:this.state.email,
            number:this.state.number
        }

          this.props.handleSubmit(formData)
       
    }
    render(){
        return(
            // <div className="row">
            //     <div className="col-md-6 offset-md-5">
            //         <br></br>
            // <div align="center">
                <form onSubmit={this.handleSubmit} >
            <label>Name:

                <br></br>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-input"/>
            </label>
            <br></br>
            <label>Email:
                <br></br>
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" className="form-input"/>
            </label>
            <br></br>
            <label>Contact:
                <br></br>
                <input type="text" value={this.state.number} onChange={this.handleChange} name="number" className="form-input"/>
            </label>
            <br></br>
            <input type="submit" className="btn btn-primary" />
                </form>
            //     </div>
            //     </div>
            // </div>
        )
    }
}