








import { useDispatch, useSelector } from "react-redux"
import "../style/home.css"




import { Badge, Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { BsCircle } from "react-icons/bs"
import { useState } from "react"


import { RxCrossCircled } from "react-icons/rx"
import { remove_user_from_group, add_user, add_group } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"




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

                <ModalHeader>User</ModalHeader>
                <Form onSubmit={(e) => { e.preventDefault(); dispatch(add_user(create_user)); set_create_user({ ...create_user, open: false }) }}>

                    <ModalBody>

                        <FormGroup>

                            <Input required onChange={(e) => set_create_user({ ...create_user, name: e.target.value })} placeholder="Enter user name"></Input>

                        </FormGroup>

                        <FormGroup>

                            <Select getOptionLabel={option => option.name}
                                getOptionValue={option => option.name} onChange={(e) => set_create_user({ ...create_user, group_id: e.id })} options={groups} className="merchant_reg_input_field" />



                        </FormGroup>





                    </ModalBody>


                    <ModalFooter>


                        <Button type="submit" color="primary">
                            Add User
                        </Button>
                        <Button onClick={() => set_create_user({ ...create_user, open: false })} color="secondary">
                            Back
                        </Button>
                    </ModalFooter>


                </Form>
            </Modal>


            <span className="group_div_top_bar"> <span className="group_div_heading">Users</span> <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_user({ open: true })}>+ Create User</Button>  </span>


            <span className="group_div_middle group1_midle">

                {users && users.map((v, i) =>
                    <Button size="sm" key={i} color={groups.filter(r => r.id == v.group_id)[0]?.color} className="user_names">{v.name}</Button>
                )}

            </span>


            <span className="group_div_last">
                <Button className="associate_btn"> <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" /> Associate User with Group</Button>
            </span>


        </div>

    )
}









export default App