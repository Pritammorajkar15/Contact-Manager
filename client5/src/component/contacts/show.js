import React from 'react'

import {connect} from 'react-redux'
import _ from 'lodash'
import { Card,CardTitle, CardText } from 'reactstrap'
function Show(props) {

        
        const {name,_id,email,number} = props.contact
        console.log("show contacts",props.contact)
        return(
            
            <div align="center">

                <h1>Contact Details:</h1>
                {/* <form action ="/uploadFile" enctype="multipart/form-data" method="POST" >
        <input type="file" name="myFile"/>
        <input type="submit" value="upload your file"/>
        </form> */}
        {/* <form action ="/uploadPhoto" enctype="multipart/form-data" method="POST" >
            <input type="file" name="myImage"/>
            <input type="submit" value="upload your image"/>
            </form><br></br> */}
                {!_.isEmpty(props.contact) && (
<Card body inverse color="primary">
        <CardTitle>{name}</CardTitle>
        <CardText>{email}-{number}</CardText>
        {/* <Button color="secondary"><Link to={`/contacts/edit/${_id}`}>Edit contact</Link></Button> */}
        
        <a href="/home" className="btn btn-success">Logout</a>
      </Card>
    
        
                )}
            </div>
        )
    }
    const mapStateToProps=(state,props)=>{
                console.log("mapstatetoprops",state)
        return {contact:state.contacts.find(cont=>cont._id==props.match.params.id)}
    }
    export default connect(mapStateToProps)(Show)
    