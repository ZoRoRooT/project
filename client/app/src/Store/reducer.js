const initialState ={
    name:" "
}
function authreducer (state=initialState,action){
    if(action.type==="LOGGEDIN"){
        return {...state,name:action.message}
    }
    if(action.type==="LOGGEDOUT"){
        return {...state,name:""}
    }
    return state
    
}
export default authreducer