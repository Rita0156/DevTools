import ItemData from "./ItemData"
//import store from "../Redux/store";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import getData from "../Redux/Appreducer/actionType";
import { Link } from "react-router-dom";
import "./home.css";
const Homepage=()=>{
    let data=useSelector(store=>store.gitHubData)
    console.log(data,"home data");
    const dispatch=useDispatch()
    useEffect(()=>{
         dispatch(getData())
    },[])
    return (
        <div className="home">
           {(data!=undefined && data.length>0)?data.map((item)=>(
                <Link key={item.id} style={{textDecoration:"none",color:"black"}} to={`/home/${item.id}`} >
                 <ItemData key={item.id} avatar_url={item.avatar_url} login={item.login}/>
                </Link>
           )):<div>Loading....</div>}
        </div>
    )
}

export default Homepage