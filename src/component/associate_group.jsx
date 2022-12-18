










import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"




import { Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"

import { useState } from "react"


import { assign_group } from "../store/counterslice"




const App = () => {

    const dispatch = useDispatch()






    return (
        <span className="group_div_last">
            <Button className="associate_btn" onClick={() => dispatch(assign_group())} > <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" />Associate Group with User</Button>
        </span>

    )
}




export default App