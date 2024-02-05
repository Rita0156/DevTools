import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"
import SingleUser from "./SingleUser"



const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/:id" element={<SingleUser/>}/>
        </Routes>
    )
}

export default AllRoutes