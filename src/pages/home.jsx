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
    const [create_group, set_create_group] = useState({ open: false, name: "", id: "1232", users: [], color: "" })


    const state = useSelector(state => state.counter)

    const groups = useSelector(state => state.counter.groups)
    const users = useSelector(state => state.counter.users)
    const ungrouped_users = useSelector(state => state.counter.ungrouped_users)




    const validateName = (name) => {
        if (name) {
            var expression = /^[a-zA-Z | "" ]+$/;

            var regex = new RegExp(expression);
            return (name).match(regex);
        }
    }




    // console.log(Math.floor((0 + Math.random()) * 0x5))
    console.log(state)


    return (


        <div className="home_base_div">


            <Modal centered isOpen={view_all.open} >
                <ModalHeader>{view_all.group_name}</ModalHeader>
                <ModalBody>
                    <ol className="users_list_moddal">
                        {view_all.data.map((v, i) => (
                            <li key={i}>{v.name}</li>
                        ))}

                    </ol>
                </ModalBody>
                <ModalFooter>

                    <Button onClick={() => set_view_all({ open: false, data: [] })} color="secondary">
                        Cancel
                    </Button>

                </ModalFooter>
            </Modal>


            <Modal centered isOpen={create_user.open}>

                <ModalHeader>Create User</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>

                            <Input required invalid={create_user.name && !validateName(create_user.name)} onChange={(e) => set_create_user({ ...create_user, name: e.target.value })} placeholder="Enter user name"></Input>

                            <FormFeedback invalid className="form_feedback_signup_page">
                                Please enter a valid name
                            </FormFeedback>
                        </FormGroup>

                        <FormGroup>

                            <Select getOptionLabel={option => option.name}
                                getOptionValue={option => option.name} onChange={(e) => set_create_user({ ...create_user, group_id: e.id })} options={groups} className="merchant_reg_input_field" />

                        </FormGroup>

                    </Form>



                </ModalBody>
                <ModalFooter>


                    <Button type="submit" onClick={() => { dispatch(add_user(create_user)); set_create_user({ ...create_user, open: false }) }} color="primary">
                        Add User
                    </Button>
                    <Button onClick={() => set_create_user({ ...create_user, open: false })} color="secondary">
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>



            <Modal centered isOpen={create_group.open}>

                <ModalHeader>Create Group</ModalHeader>
                <ModalBody>

                    <Form>
                        <FormGroup>

                            <Input required invalid={create_user.name && !validateName(create_user.name)} onChange={(e) => set_create_group({ ...create_group, name: e.target.value })} placeholder="Enter group name"></Input>

                            <FormFeedback invalid className="form_feedback_signup_page">
                                Please enter a valid name
                            </FormFeedback>
                        </FormGroup>

                        <FormGroup>

                            <Select isMulti getOptionLabel={option => option.name}
                                getOptionValue={option => option.name} onChange={(e) => set_create_group({ ...create_group, users: e })} options={ungrouped_users} className="merchant_reg_input_field" />

                        </FormGroup>

                    </Form>


                </ModalBody>
                <ModalFooter>


                    <Button type="submit" onClick={() => { dispatch(add_group(create_group)); set_create_group({ ...create_group, open: false }) }} color="primary">
                        Add User
                    </Button>
                    <Button onClick={() => set_create_group({ ...create_group, open: false })} color="secondary">
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>



            <div className="group_div_base">

                <span className="group_div_top_bar"> <span className="group_div_heading">Users</span> <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_user({ open: true })}>+ Create User</Button>  </span>


                <span className="group_div_middle group1_midle">


                    {users && users.map((v, i) =>
                        <Button key={i} color={groups.filter(r => r.id == v.group_id)[0]?.color} className="user_names">{v.name}</Button>
                    )}

                </span>


                <span className="group_div_last">
                    <Button className="associate_btn"> <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" /> Associate User with Group</Button>
                </span>


            </div>



            <div className="group_div_base">

                <span className="group_div_top_bar"> <span className="group_div_heading">Groups</span> <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_group({ ...create_group, open: true })}>+ Create Group</Button>  </span>


                <span className="group_div_middle group_div2_middle">

                    {groups.map((r, k) =>

                        <span key={k} className="group2_box">

                            <span className="group2_groupnum"> <Badge color={r.color}> </Badge> {r.name}</span>

                            {r.users && r.users.slice(0, 3).map((v, i) =>
                                <Button key={i} color={r.color} className="user_names">{v.name} <RxCrossCircled onClick={() => dispatch(remove_user_from_group({ r, v, k, i }))} color="white" size={20} className="cross_icon" /> </Button>
                            )}

                            {r.users?.length > 2 && <Button color={r.color} className="user_names see_all" onClick={() => set_view_all({ open: true, data: r.users, group_name: r.name })} >... view all</Button>}
                        </span>
                    )}
                    {ungrouped_users?.length > 0 &&
                        <span className="group2_box">

                            <span className="group2_groupnum"> <Badge color="secondary"> </Badge> No Groups</span>

                            {/* {users && users.filter(v => v.group_id == null).slice(0, 3).map((v, i) => */}
                            {ungrouped_users.slice(0, 3).map((v, i) =>
                                <Button key={i} color="secondary" className="user_names">{v.name}</Button>
                            )}

                            {ungrouped_users.length > 3 && <Button onClick={() => set_view_all({ open: true, data: ungrouped_users, group_name: "Ungrouped Users" })} color="secondary" className="user_names see_all"  >... view all</Button>}


                        </span>
                    }

                </span>


                <span className="group_div_last">
                    <Button className="associate_btn"> <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" /> Associate User with Group</Button>
                </span>


            </div>


        </div>


    )

}

export default App