










import { useDispatch } from "react-redux"
import "../style/home.css"




import { Button } from "reactstrap"


// ICON
import { ImAttachment } from "react-icons/im"


// REDUCER FUNCTION
import { de_assign_group } from "../store/counterslice"




const App = () => {

    const dispatch = useDispatch()






    return (
        <span className="group_div_last">
            <Button className="associate_btn" onClick={() => dispatch(de_assign_group())} > <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" />De Associate Group with User</Button>
        </span>

    )
}




export default App