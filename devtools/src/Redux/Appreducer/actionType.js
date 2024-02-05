
import * as types from "./action";
const getData=(params)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_FAILED_REQUWST})
   fetch('https://api.github.com/users',params)
   .then((req)=>{
    return req.json()
   })
   .then((res)=>{
    dispatch({type:types.GET_DATA_SUCCESS_REQUWST,payload:res.data})
    
    //console.log(payload,"payload");
    console.log(res,"response");
   })
   .catch((err)=>{
    dispatch({type:types.GET_DATA_FAILED_REQUWST})
    console.log(err,"req error");
   })

}
export default getData