import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"





import { useState } from "react"



// IMPORTING TOAST
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// IMPORTING 2 COMPONENTS OF USER AND GROUP
import UserList from "../component/userList"
import GroupList from "../component/groupList"


const App = () => {



    const [create_group, set_create_group] = useState({ open: false, name: "", users: [], color: "" })


    const state = useSelector(state => state.counter)





    const validateName = (name) => {
        if (name) {
            var expression = /^[a-zA-Z | "" ]+$/;

            var regex = new RegExp(expression);
            return (name).match(regex);
        }
    }


    const add_a_group = (e) => {


        const create_id = Math.floor((1 + Math.random()) * 0x12344)


        const new_group = []

        e.map(v => new_group.push({ name: v.name, group_id: create_id, id: v.id }))


        set_create_group({ ...create_group, users: new_group, id: create_id })

    }

console.log(state)

    return (


        <div className="home_base_div">

            <ToastContainer />



            <UserList />

            <GroupList />

        </div>


    )

}

export default App