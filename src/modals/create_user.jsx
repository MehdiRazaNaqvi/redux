


import { Badge, Button } from "reactstrap"

import { ImAttachment } from "react-icons/im"
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { BsCircle } from "react-icons/bs"
import { useState } from "react"


import { RxCrossCircled } from "react-icons/rx"
import { add_group, remove_user_from_group, assign_group , add_user } from "../store/counterslice"

import { Input, Form, FormGroup, FormFeedback } from "reactstrap"


import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const App = ({ create_user , set_create_user }) => {



    const dispatch = useDispatch()


    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)



    return (
        <span>
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
        </span>


    )

}









export default App