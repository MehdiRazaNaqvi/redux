import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"




import { Badge, Button } from "reactstrap"

import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useState } from "react"


import { add_user } from "../store/counterslice"
import { add_group } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import UserList from "../component/userList"
import GroupList from "../component/groupList"


const App = () => {


    const dispatch = useDispatch()

    const [view_all, set_view_all] = useState({ open: false, data: [] })
    const [create_user, set_create_user] = useState({ open: false, name: "", group_id: null })
    const [create_group, set_create_group] = useState({ open: false, name: "", users: [], color: "" })


    const state = useSelector(state => state.counter)

    // const groups = useSelector(state => state.counter.groups)
    // const users = useSelector(state => state.counter.users)

    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)




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