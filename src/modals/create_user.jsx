


import { Button } from "reactstrap"

// IMPORTING SELECT LIBRARYY
import Select from 'react-select'


import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

// IMPORTING REDUCER FUNCTION
import { add_user } from "../store/counterslice"

import { Input, Form, FormGroup } from "reactstrap"


import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const App = ({ create_user, set_create_user }) => {



    const dispatch = useDispatch()


    const groups = useSelector(state => state.counter.groups)



    return (
        <span>
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



        </span>


    )

}









export default App