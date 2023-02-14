





















import {  Button } from "reactstrap"



import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"



// REDUCER FUNCTIONS
import { add_group } from "../store/counterslice"

import { Input, Form, FormGroup} from "reactstrap"


import { useDispatch } from "react-redux"




const App = ({ create_group, set_create_group }) => {



    const dispatch = useDispatch()




    return (

        <span>
            <Modal centered isOpen={create_group.open}>

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

            </Modal>

        </span>


    )

}









export default App