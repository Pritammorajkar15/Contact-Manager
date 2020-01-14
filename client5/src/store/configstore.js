import { combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import contactsReducer from '../reducers/contacts'
import usersReducer from '../reducers/users'
const configureStore=()=>{
    const store=createStore(combineReducers({
       contacts:contactsReducer,
       users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore
