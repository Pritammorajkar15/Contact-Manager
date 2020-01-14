import Axios from 'axios'
import {setContacts} from '../actions/contacts'

export const setUsers =(user={})=>{
    console.log("setusers",user)
        return {type:"SET_USER",payload:user}

}
export const StartRegisterUser=(formData,props)=>{
    return (dispatch)=>{
        Axios.post('http://localhost:3025/users/register',formData)
.then((response)=>
{
    if(response.data.hasOwnProperty('error')){
        alert(response.data.message)
    }
    else{
      
        alert('successfully registered')
        dispatch(setUsers())
        props.history.push('/users/login')
        
    }
})
.catch((err)=>
{
    console.log(err)
})
    }
}

export const startLoginUser=(formData,props)=>{
    return(dispatch)=>{
        Axios.post('http://localhost:3025/users/login',formData)
.then((response)=>
{
    console.log('oioi')
    if(response.data.hasOwnProperty('error')){
        alert(response.data.message)
    }
    else{
        console.log("response log",response.data)
       
        const token=response.data.token
        console.log("heya",token)
        localStorage.setItem('token', token)
       
        Axios.get('http://localhost:3025/users/account',{
           headers:{'x-auth':token}})
        Promise.all([Axios.get('http://localhost:3025/users/account',{
            headers:{'x-auth':token}
        }),Axios.get('http://localhost:3025/contacts',{
            headers:{'x-auth':token}
        })])
        .then((values)=>{
            const [userResponse,contactsResponse]=values
            console.log("response after logging in",contactsResponse.data)
            dispatch(setUsers(userResponse.data))
           
        dispatch(setContacts(contactsResponse.data))
           props.history.push('/home')

        //     .then((response)=>{
        //         console.log(response.data)
        //         dispatch(setUser())
        //             alert('successfully logged in')
                
               
            
        //    props.history.push('/home')
           })
            .catch((err)=>{
                console.log(err)
            })
           
       
       
    
}})
.catch((err)=>
{
    console.log(err)
})

    }
}

export const startGetUser=()=>{
    console.log('hereee')
    return (dispatch)=>{
        Axios.get('http://localhost:3025/users/account',{headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>{
                // if(response.data.hasOwnProperty('notice'))
                // {
                    console.log('user', response.data)
                    dispatch(setUsers(response.data))
                    //window.location.href='/users/login'
                //}
            })
            .catch((err)=>{
                console.log('error inn getuser', err)
                console.log(err)
            })
    }
}

export const userLogout=(props)=>{
    return (dispatch)=>{
        Axios.delete('http://localhost:3025/users/logout',{headers:{'x-auth':localStorage.getItem('token')}})
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
            }
            else{
                localStorage.clear()
                dispatch(setUsers({}))
                alert('successfully logged out')
        props.history.push('/users/login')
            }
        })
    }
}

