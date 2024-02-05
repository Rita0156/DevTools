import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import getData from "../Redux/Appreducer/actionType"
import { useEffect, useState } from "react"
const SingleUser = () => {
    const { id } = useParams()
    const data = useSelector((store) => store.musicRecords)
    const dispatch = useDispatch()
    const [currentData, setCurrentData] = useState({})
    const userData = data.filter((item) => {
        return item.id === id
    })
    setCurrentData(userData)
    useEffect(() => {
        dispatch(getData())
    }, [])
    return (
        <div>
            <h1>Single User Components</h1>
            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"25px",margin:"auto"}}>
                <img src={currentData.avatar_url} alt="avatar" />
                <h2>{currentData.login}</h2>
                <img src={currentData.organizations_url} alt="organization url" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sint laboriosam odio alias error esse tempore similique quia at, perspiciatis assumenda maxime temporibus provident, rem expedita cum laborum, corrupti eos!</p>
                 
            </div>
            <Link to='/'>Back to home</Link>
        </div>
    )
}
export default SingleUser
//box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;