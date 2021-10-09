import "bootstrap/dist/css/bootstrap.min.css";
import { Button , Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, {useState} from "react"

export default function EditModal(props) {
    const { showEditModal, setShowEditModal, data, setData, item , ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowEditModal(!showEditModal);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const language = e.target.language.value;
        const admin = e.target.admin.checked;
        const id =  item.id
        const personArray = [{ name, lastname, email, language, admin, id}]
        let nuewData = data.map(obj => personArray.find(o => o.id === obj.id) || obj);
        setData(nuewData);
        setShowEditModal(false)
    }

    console.log("data:", data)


    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Edit</h3></div>
                </ModalHeader>
                <ModalBody>
                <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="id"
                                readOnly
                                value={item.id}
                                />
                               </Col> 
                </FormGroup>

                

                <FormGroup row className='mt-2'>
                <Label sm={3}>Name</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="name"
                                placeholder="Juan"
                                defaultValue={item.name}
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
                            defaultValue={item.lastname}
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
                            defaultValue={item.email}
                    />
                    </Col>
                </FormGroup>

                <FormGroup row className='mt-2'>
                        <Label  sm={3}>Select</Label>
                        <Col sm={9}>
                        <Input type="select" name="select" name="language" defaultValue={item.language}>
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
                            name="admin" defaultChecked={item.admin}
                    />
                    </Col>
                </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}