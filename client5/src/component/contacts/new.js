import React from 'react'
import Form from './form';
import {connect} from 'react-redux'
import {startContactsNew} from '../../actions/contacts'
import {Link} from 'react-router-dom'
 function New(props) {
 
 const handleSubmit=(formData)=>
 {
     
    props.dispatch(startContactsNew(formData,props))

    
 }

     return(
         <div align="center">
             <h2>Add contact</h2>
           <Form handleSubmit={handleSubmit}/>
           <br></br>
           <Link to="/home" className="btn btn-success">Back</Link>
         </div>
     )

 
}
const mapStateToProps=(state,props)=>{
    return {
            contact:state.contacts.find(contact=>contact._id==props.match.params.id)
    }
}


export default connect(mapStateToProps)(New)