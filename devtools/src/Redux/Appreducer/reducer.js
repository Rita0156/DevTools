import * as  types from './action'

const initState={
    gitHubData:[],
    isError:false,
    isLoading:false
}

const reducer=(oldState=initState,action)=>{
   const {type,payload}=action
   switch(type){
    case types.GET_DATA_REQUEST : return {
        ...oldState,
        isError:false,
        isLoading:true
    }
    case types.GET_DATA_SUCCESS_REQUWST : return {
        ...oldState,
        gitHubData:payload,
    isError:false,
    isLoading:false
    }
    case types.GET_DATA_FAILED_REQUWST :return {
        ...oldState,
        isError:true,
    isLoading:false
    }
    default :  return oldState
   }
  
}

export default reducer