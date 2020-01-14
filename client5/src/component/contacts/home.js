import React from "react"

import {Jumbotron} from 'reactstrap'
export default class Home extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return (

            <div align="center" className="row">
                <div className="col-md-6 offset-md-3">
                    {/* <Jumbotron style={{"background-color":"rgba(255,0,0,0,3)"}}> */}
                    <Jumbotron style={{"background":"none"}}>
                <h2>Welcome to contacts app</h2>
                <a href="/contacts" className="btn btn-secondary">contacts</a>
                
                </Jumbotron>
                </div>
                </div>
        )
    }
}