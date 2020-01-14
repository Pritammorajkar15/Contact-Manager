import axios from 'axios'

export const setContacts=(contacts)=>{
    console.log("setcontacts",contacts)
    return {type:"SET_CONTACTS",payload:contacts}
}
export const startSetContacts=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3025/contacts',{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then((response)=>{
            console.log(response.data,1238976)
            const contacts=response.data
           dispatch(setContacts(contacts))
        })
        .catch((err)=>{
            console.log('err',err)
        })
    }
}
export const contactsRemove=(id)=>{
    return{type:"REMOVE_CONTACTS",payload:id}
}
export const startContactsRemove=(id)=>{
    return (dispatch)=>{
        
            axios.delete(`http://localhost:3025/contacts/${id}`,
        {headers:{'x-auth':localStorage.getItem('token')}}
        )
        .then((response)=>{
            dispatch(contactsRemove(response.data._id))
            
        })

    }
}

export const ContactsNew=(contact)=>{
    return{type:"ADD_CONTACTS",payload:contact}
    }
    export const startContactsNew=(formData,props)=>{
        return (dispatch)=>{
            axios.post('http://localhost:3025/contacts',formData,{
        headers:{
            'x-auth':localStorage.getItem('token')
    
        }
    })
    .then((response)=>{
        console.log("abc",response.data)
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }
        else{
             const contact=response.data
             dispatch(ContactsNew(contact))
            //console.log(response.data)
            // const note=response.data
            //const id=response.data._id
           
            //props.history.push(`/contacts/show/${contact._id}`)
            props.history.push('/contacts')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
        }
    }
export const contactsEdit=(contact)=>{
return {type:"EDIT_CONTACT",payload:contact}
}
export const startcontactsEdit=(formData,props)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3025/contacts/${props.match.params.id}`,formData,{
                        headers:{'x-auth':localStorage.getItem('token')}
                    })
                    .then((response)=>{
                        if(response.data.hasOwnProperty('errors')){
                            alert(response.data.errors.message)
                        }
                        else{
                            const contact=response.data
                            dispatch(contactsEdit(contact))
                            props.history.push('/contacts')
                            console.log(contact)
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    }) 

    }
}
