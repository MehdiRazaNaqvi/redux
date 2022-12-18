


import { Badge, Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { BsCircle } from "react-icons/bs"
import { useState } from "react"


import { RxCrossCircled } from "react-icons/rx"
import { add_group, remove_user_from_group, assign_group } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"


import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const App = ({view_all , set_view_all}) => {



    const dispatch = useDispatch()

    const [create_user, set_create_user] = useState({ open: false, name: "", group_id: null })
    const [create_group, set_create_group] = useState({ open: false, name: "", users: [], color: "" })



    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)



    return (
        <span>
            <ModalHeader>  <Badge color={view_all.color}> </Badge>  <span>{view_all.group_name}</span>  </ModalHeader>
            <ModalBody>
                <ol className="users_list_moddal">
                    {view_all.data.map((v, i) => (
                        <li key={i}> <Button size="sm" className="modal_names" style={{ width: "7rem", overflow: "eclipse" }} color={view_all.color}>{v.name}</Button> </li>
                    ))}

                </ol>
            </ModalBody>
            <ModalFooter>

                <Button onClick={() => set_view_all({ open: false, data: [] })} color="secondary">
                    Back
                </Button>

            </ModalFooter>
        </span>


    )

}









export default App