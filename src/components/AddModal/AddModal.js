import "bootstrap/dist/css/bootstrap.min.css";
import { Button , Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, {useState} from "react"

export default function AddModal(props) {
    const { showAddModal, setShowAddModal, data, setData , ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowAddModal(!showAddModal);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const language = e.target.language.value;
        const admin = e.target.admin.checked;
        const id =  data.length + 1; 
        setData([{id, name, lastname, admin, email, language},...data]);
        setShowAddModal(false)
    }


    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Insert</h3></div>
                </ModalHeader>

                <ModalBody>
                <FormGroup row className='mt-2'>
                <Label sm={3}>Name</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="name"
                                placeholder="Juan"
                                required
                                />
                               </Col> 
                </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label sm={3}>Last Name</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="text"
                            required
                            placeholder="Hdez"
                            name="lastname"
                    />
                    </Col>
                </FormGroup>
                
                <FormGroup row className='mt-2'>
                    <Label sm={3}>Email</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="email"
                            required
                            placeholder="hello@hello.com"
                            name="email"
                    />
                    </Col>
                </FormGroup>

                <FormGroup row className='mt-2'>
                        <Label  sm={3}>Select</Label>
                        <Col sm={9}>
                        <Input type="select" name="select" name="language">
                            <option>ES</option>
                            <option>EN</option>
                            <option>PT</option>
                        </Input>
                        </Col>
               </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label  sm={3}>Is Admin</Label>
                    <Col sm={9}>
                    <Input  type="checkbox"
                            name="admin"
                    />
                    </Col>
                </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Insert</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}



