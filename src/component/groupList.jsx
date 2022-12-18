








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


import AddGroup from "../component/addGroup"


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
                <ViewModal view_all={view_all} set_view_all={set_view_all} />
            </Modal>




            <Modal centered isOpen={create_group.open}>
                <GroupModal create_group={create_group} set_create_group={set_create_group} />
            </Modal>





            <AddGroup create_group={create_group} set_create_group={set_create_group} />


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


            <AssociateGroup />


        </div>




    )
}









export default App