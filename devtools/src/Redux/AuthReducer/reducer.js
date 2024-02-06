import * as types from "./actionType"
const init={
    isAuth:null,
    isError:false,
    isLoading:false
}

const reducer=(oldState=init,action)=>{
 const {type,payload}=action

 switch(type){
    case types.POST_REQUEST: return {
        ...oldState,
        isLoading:true,
        isError:false
    }
    case types.POST_SUCCESS_REQUEST : return {
        ...oldState,
        isLoading:false,
        isError:false,
        isAuth:payload
    }
    case types.POST_FAILED_REQUEST : return {
        ...oldState,
        isLoading:false,
        isError:true
    }
    default : return oldState
 }
}
export default reducer