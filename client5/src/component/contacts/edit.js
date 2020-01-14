import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {startcontactsEdit} from '../../actions/contacts'
import {Link} from 'react-router-dom'

import _ from 'lodash'
function Edit(props){

 const handleSubmit=(formData)=>

 { props.dispatch(startcontactsEdit(formData,props))
    console.log("edit",props.contact)
 }

     return(
         <div className="row">
             <div className="col-md-6 offset-md-5">
             <h2>Edit contact</h2>
             {/* {!_.isEmpty(props.contact) && ( */}
               
     

            <h2> {Object.keys(props.contact).length!==0 && <Form {...props.contact} 
             handleSubmit={handleSubmit}/>}</h2>
             <br></br>
           <Link to="/home" className="btn btn-success">Back</Link>
           </div>
           
         </div>
     )

 
}
const mapStateToProps=(state,props)=>{
    return{contact:state.contacts.find(cont=>cont._id==props.match.params.id)}
}
export default connect(mapStateToProps)(Edit)
