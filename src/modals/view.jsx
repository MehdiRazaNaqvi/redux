


import { Badge, Button } from "reactstrap"




import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"


const App = ({ view_all, set_view_all }) => {





    return (
        <span>

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


        </span>


    )

}









export default App