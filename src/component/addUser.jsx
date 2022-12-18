











import "../style/home.css"




import { Button } from "reactstrap"




const App = ({ create_user, set_create_user }) => {







    return (

        <span className="group_div_top_bar">
            <span className="group_div_heading">Users</span>
            <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_user({ open: true })}>+ Create User</Button>
        </span>


    )

}



export default App