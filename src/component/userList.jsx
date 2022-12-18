








import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"




import { Badge, Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { BsCircle } from "react-icons/bs"
import { useState } from "react"


import { RxCrossCircled } from "react-icons/rx"
import { remove_user_from_group, add_user, add_group, assign_group } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"

import CreateUser from "../modals/create_user"
import AssociateUser from "./associate_user"

import AddUser from "../component/addUser"


const App = () => {

    const dispatch = useDispatch()

    const [view_all, set_view_all] = useState({ open: false, data: [] })
    const [create_user, set_create_user] = useState({ open: false, name: "", group_id: null })
    const [create_group, set_create_group] = useState({ open: false, name: "", users: [], color: "" })



    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)



    return (




        <div className="group_div_base">


            <Modal centered isOpen={create_user.open}>
                <CreateUser create_user={create_user} set_create_user={set_create_user} />
            </Modal>


            <AddUser create_user={create_user} set_create_user={set_create_user} />

            <span className="group_div_middle group1_midle">

                {users && users.map((v, i) =>
                    <Button size="sm" key={i} color={groups.filter(r => r.id == v.group_id)[0]?.color} className="user_names">{v.name}</Button>
                )}

            </span>



            <AssociateUser />


        </div>

    )
}









export default App