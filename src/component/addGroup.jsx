











import "../style/home.css"




import { Button } from "reactstrap"




const App = ({ create_group, set_create_group }) => {







    return (

        <span className="group_div_top_bar">


            <span className="group_div_heading">Groups</span>
            <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_group({ ...create_group, open: true })}>+ Create Group</Button>


        </span>

    )

}



export default App