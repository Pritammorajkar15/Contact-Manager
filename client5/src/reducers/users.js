const usersInitialState={}

const usersReducer=(state=usersInitialState,action)=>{
            switch(action.payload){
                case "SET_USERS":{
                    return {...action.payload}
                }
                default:{
                    return {...state}
                }
            }
}
export default usersReducer