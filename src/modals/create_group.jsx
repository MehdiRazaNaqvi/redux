





















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




const App = ({ create_group, set_create_group }) => {



    const dispatch = useDispatch()

    const [create_user, set_create_user] = useState({ open: false, name: "", group_id: null })



    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)



    return (

        <span>

            <ModalHeader>Add Group</ModalHeader>

            <Form onSubmit={(e) => { e.preventDefault(); dispatch(add_group({ ...create_group, id: Math.floor((1 + Math.random()) * 0x12344) })); set_create_group({ ...create_group, open: false }) }}>
                <ModalBody>



                    <FormGroup>

                        <Input required onChange={(e) => set_create_group({ ...create_group, name: e.target.value })} placeholder="Enter group name"></Input>

                        {/* <FormFeedback invalid className="form_feedback_signup_page">
Please enter a valid name
</FormFeedback> */}
                    </FormGroup>

                    {/* <FormGroup>

<Select isMulti getOptionLabel={option => option.name}
getOptionValue={option => option.name} onChange={(e) => { add_a_group(e) }} options={users.filter(v => v.group_id == null)} className="merchant_reg_input_field" />

</FormGroup> */}

                    {/* set_create_group({ ...create_group, users: e }) */}



                </ModalBody>
                <ModalFooter>


                    <Button type="submit" color="primary">
                        Add Group
                    </Button>
                    <Button onClick={() => set_create_group({ ...create_group, open: false })} color="secondary">
                        Back
                    </Button>
                </ModalFooter>
            </Form>

        </span>


    )

}









export default App