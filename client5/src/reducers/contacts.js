const contactsInitialState=[]

const contactsReducer=(state=contactsInitialState,action)=>{
    switch(action.type){
        case "SET_CONTACTS":{
                return [...action.payload]
        }
        case "REMOVE_CONTACTS":{
            return state.filter(cont=>cont._id!=action.payload)
        }
        case "ADD_CONTACTS":{
            return [...state,action.payload]
        }
        case "EDIT_CONTACT":{
            return state.map(cont=>{
                if(cont._id==action.payload.id){
                    return {...action.payload}
                }
                else{
                    return {...cont}
                }
            })
        }
        default:{
           return  [...state]
        }
    }
}
export default contactsReducer