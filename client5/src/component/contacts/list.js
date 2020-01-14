import React from 'react'
//import Axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startContactsRemove} from '../../actions/contacts'
import {Jumbotron} from 'reactstrap'
import swal from 'sweetalert'
 class List extends React.Component{

    // constructor(){
    //     console.log('constructor')
    //     super()
    //         this.state={
    //             contacts:[]
    //         }
        
    // }
    // componentDidMount(){
    //     console.log('cdm')
    //     // Axios.get('http://localhost:3025/contacts',{headers:{
    //     //     'x-auth':localStorage.getItem('authToken')
    //     // }})
    //     // .then((response)=>{
    //     //     console.log(response.data,1238976)
    //     //     const contacts=response.data
    //     //     this.setState({contacts})
    //     // })
    // }
    handleRemove=(id)=>{
        this.props.dispatch(startContactsRemove(id))
        // Axios.delete(`http://localhost:3025/contacts/${id}`,{headers:{'x-auth':localStorage.getItem('authToken')}})
        // .then((response)=>{
        //     this.setState((prevState)=>{
        //         return{ contacts:prevState.contacts.filter(contact=>contact._id!==id)}
        //     })
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
        
    }
    render(){

        return(
            <div className="row">
            <div align="center" className="col-md-6 offset-md-3">
            <Jumbotron style={{"background":"none"}}>
    <h2>contacts list: {this.props.contacts.length}</h2>
                <table border="2" className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                           
                            
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.contacts.map((contact)=>{
                            console.log('hi',contact,987676543)
                            return(
                               
                                    <tr key={contact._id}>
                                        
                            <td><Link to={`/contacts/show/${contact._id}`} className="btn btn-primary">{contact.name}</Link></td>
                           
                        
                        <td><button onClick={ ()=>{const confirmRemove=swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your file is safe!");
  }
});
                            if(confirmRemove){
                                this.handleRemove(contact._id)
                            }
                           }} className="btn btn-danger">Remove</button>
                        <td><Link to={`/contacts/edit/${contact._id}`} className="btn btn-primary">Edit</Link></td>
                        </td>

                                    </tr>
                                
                            ) 
                        })
                    }
                    </tbody>
                </table>
                <Link to="/contacts/new" className="btn btn-success">Add Contacts</Link>
                
                
               </Jumbotron>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{

    return{contacts:state.contacts}
    }
    export default connect(mapStateToProps)(List)
