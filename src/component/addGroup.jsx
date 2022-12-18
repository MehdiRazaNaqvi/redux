











import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"




import { Badge, Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { BsCircle } from "react-icons/bs"
import { useState } from "react"


import { RxCrossCircled } from "react-icons/rx"
import { add_group, remove_user_from_group, assign_group } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"

import ViewModal from "../modals/view"
import GroupModal from "../modals/create_group"
import AssociateGroup from "../component/associate_group"




const App = ({create_group , set_create_group}) => {







    return (

        <span className="group_div_top_bar">


            <span className="group_div_heading">Groups</span>
            <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_group({ ...create_group, open: true })}>+ Create Group</Button>


        </span>

    )

}



export default App