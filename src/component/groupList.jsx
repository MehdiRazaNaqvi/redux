








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



            <Modal centered isOpen={view_all.open} >
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
            </Modal>




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


            <span className="group_div_top_bar"> <span className="group_div_heading">Groups</span> <Button style={{ marginRight: "1.5rem" }} className="create_btn" onClick={() => set_create_group({ ...create_group, open: true })}>+ Create Group</Button>  </span>


            <span className="group_div_middle group_div2_middle">

                {groups.map((r, k) =>

                    <span key={k} className="group2_box">

                        <span className="group2_groupnum"> <Badge color={r.color}> </Badge> {r.name}</span>

                        {r.users && r.users.slice(0, 3).map((v, i) =>
                            <Button size="sm" key={i} color={r.color} className="user_names">{v.name} <RxCrossCircled onClick={() => dispatch(remove_user_from_group({ r, v, k, i }))} color="white" size={20} className="cross_icon" /> </Button>
                        )}
                        {r.users?.length > 3 && <Button color={r.color} className="user_names see_all" onClick={() => set_view_all({ open: true, data: r.users, group_name: r.name, color: r.color })} >... view all</Button>}
                    </span>
                )}

                <span className="group2_box">

                    <span className="group2_groupnum"> <Badge color="secondary"> </Badge> No Groups</span>

                    {users.filter(v => v.group_id == null || v.group_id == undefined).slice(0, 3).map((v, i) =>
                        <Button size="sm" key={i} color="secondary" className="user_names">{v.name}</Button>
                    )}

                    {users.filter(v => v.group_id == null || v.group_id == undefined)?.length > 3 && <Button onClick={() => set_view_all({ open: true, data: users.filter(v => v.group_id == null), group_name: "Ungrouped Users" })} color="secondary" className="user_names see_all"  >... view all</Button>}


                </span>


            </span>


            <span className="group_div_last">
                <Button className="associate_btn"> <ImAttachment style={{ marginRight: "0.1rem" }} color="lightgray" /> Associate Group with User</Button>
            </span>


        </div>




    )
}









export default App