
import * as types from "./action";
const getData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_FAILED_REQUWST})
   fetch('https://api.github.com/users')
   .then((req)=>{
    return req.json()
   })
   .then((res)=>{
    dispatch({type:types.GET_DATA_SUCCESS_REQUWST,payload:res})
    
    //console.log(payload,"payload");
    console.log(res,"response");
   })
   .catch((err)=>{
    dispatch({type:types.GET_DATA_FAILED_REQUWST})
    console.log(err,"req error");
   })

}
export default getData