import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import getData from "../Redux/Appreducer/actionType"
import { useEffect, useState } from "react"
const SingleUser = () => {
    const { id } = useParams()
    const data = useSelector((store) => store.gitHubData)
    console.log(data,"at single user page");
    const dispatch = useDispatch()
    const [curData,setCurData]=useState({})
    // const userData = data.filter((item,ind) => {
    //     return item.id === id
    // })
    console.log(data,"single user data");
    
    useEffect(() => {
        if(data.length==0){
            dispatch(getData())
        }
    }, [])
    useEffect(()=>{
        if(id){
            let cur=data.find((item)=>item.id==id)
            cur && setCurData(cur)
            console.log(id,"id",curData,"curdata");
        }
    },[id,curData,data])
    return (
        <div>
            <h1>Single User Components</h1>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"25px",margin:"auto"}}>
                <img src={curData.avatar_url} alt="avatar" />
                <h2>{curData.login}</h2>
                <img src={curData.organizations_url} alt="organization url" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sint laboriosam odio alias error esse tempore similique quia at, perspiciatis assumenda maxime temporibus provident, rem expedita cum laborum, corrupti eos!</p>
                 
            </div>
            <Link to='/'>Back to home</Link>
        </div>
    )
}
export default SingleUser
//box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;