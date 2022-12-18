








import { useSelector } from "react-redux"
import "../style/home.css"




import { Button } from "reactstrap"


import { useState } from "react"


// IMPORTING CREATE USER MODAL
import CreateUser from "../modals/create_user"

// IMPORTING BOTTOM ASSOCIATE USER BUTTON
import AssociateUser from "./associate_user"

// IMPORTING TOP CREATE USER BUTTON
import AddUser from "../component/addUser"


const App = () => {


    const [create_user, set_create_user] = useState({ open: false, name: "", group_id: null })



    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)



    return (




        <div className="group_div_base">

            {/* MODAL */}
            <CreateUser create_user={create_user} set_create_user={set_create_user} />


            {/* TOP BAR OF USER DIV */}
            <AddUser create_user={create_user} set_create_user={set_create_user} />


            {/* MIDDLE PART OF YSER DIV */}
            <span className="group_div_middle group1_midle">

                {users && users.map((v, i) =>
                    <Button size="sm" key={i} color={groups.filter(r => r.id == v.group_id)[0]?.color} className="user_names">{v.name}</Button>
                )}

            </span>



            {/* LAST ASSOCIATE PART OF USER DIIV */}
            <AssociateUser />


        </div>

    )
}









export default App