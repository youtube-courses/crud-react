import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Input, Button , Container, Modal, ModalBody, ModalHeader,
          FormGroupm, ModalFooter, FormGroup
} from "reactstrap";
import React, {useState} from "react"

import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import Footer from './components/Footer';
import axios from 'axios';

import { BsFillPencilFill, BsTrash } from "react-icons/bs";

const URL = "https://jsonplaceholder.typicode.com/users"

function App() {
  const initialState = [
    { id: 1, name: "maria" , lastname: "Falcon", email: "a@gmail.com", admin: true, language: "ES" },
    { id: 2, name: "Yoel" , lastname: "Herrera", email: "b@gmail.com", admin: false, language: "EN" }
  ]

  const[data, setData] =  useState(initialState)


  // Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const [item, setItem] = useState({})

  const insertFn = () => {
    setShowAddModal(true);
  }

  const editFn = (item) => {
    setShowEditModal(true);
    setItem(item);
 }

 const deleteFn = (id) => {
   let opcion = window.confirm("Are you sure you want to delete"+id);
   if (opcion == true) {
      const newdata = data.filter(e => e.id !== id );
      setData(newdata)
    }
}

 const restartFn = () => {
    setData(initialState);
 }

 const loadAxios = () => {
   axios.get(URL).then(resp => {
        const nuewData = []
        const dataAxios = resp.data
        
        dataAxios.map(item => {
          nuewData.push(
                          {id: item.id,     
                          name: item.name.split(" ")[0],
                          lastname: item.name.split(" ")[1],
                          email: item.email,
                          admin: Math.random() < 0.5,
                          language: "ES"},
                       )
        })
        setData(nuewData)
    });
 }


   const loadFetch = async () => {
    const nuewData = []
    try {
    let res = await fetch(URL);
    const dataFetch  = await res.json();
    dataFetch.map(item => {
      nuewData.push(
                      {id: item.id,     
                      name: item.name.split(" ")[0],
                      lastname: item.name.split(" ")[1],
                      email: item.email,
                      admin: Math.random() < 0.5,
                      language: "ES"},
                   )
    })
    setData(nuewData)

    }
       catch (error) {
          console.log(error);
      }

  }

  
  return (
    <>
    <Container>
        <br></br>
          <Button color="primary" color="success" onClick={()=>insertFn()}  className='m-2'>Insert New Person</Button>
          <Button color="primary"  onClick={()=>restartFn()}  className='m-2'>Restart Data</Button>
          <Button onClick={()=>loadAxios()}  className='m-2'>Load with Axios</Button>
          <Button onClick={()=>loadFetch()}  className='m-2'>Load with Fech</Button>
        <br></br>
        <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>lastname</th>
                <th>admin</th>
                <th>email</th>
                <th>language</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                      <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.lastname}</td>
                         <td><Input type="checkbox" disabled="true" checked={item.admin}/></td>
                         <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                         <td>{item.language}</td>
                         <td>
                           <Button color="warning" onClick={()=>editFn(item)}><BsFillPencilFill/></Button>{" "}
                           <Button color="danger" onClick={()=>deleteFn(item.id)}><BsTrash/></Button> 
                        </td>
                      </tr>  
                ))}
            </tbody>
        </Table>
    </Container>

    <AddModal  showAddModal={showAddModal} setShowAddModal={setShowAddModal} setData={setData} data={data}  />
    <EditModal  showEditModal={showEditModal} setShowEditModal={setShowEditModal} setData={setData} data={data} item={item} />
    
    <Container>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
