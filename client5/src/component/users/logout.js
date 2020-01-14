import React from 'react'
import {connect} from 'react-redux'
import {userLogout} from '../../actions/users'
function  Logout(props){
   
    props.dispatch(userLogout(props))
    
       return(
           <div>

           </div>
       )
    }
export default connect()(Logout)