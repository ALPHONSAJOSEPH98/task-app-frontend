import React, { useEffect } from 'react'
import { PiUploadFill } from "react-icons/pi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AddTaskApi } from '../Services/AllApis';
import Swal from 'sweetalert2'


function TaskForm({setViewtask}) {
    
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const [task , setTask] = useState({
    no :"" ,
    title :"" ,
    description :''
    
  })
  console.log(task);
  
  

  const handleUpload=async() =>{
    const {no,title,description} = task
     
    if((!no||!title||!description)){
      
      Swal.fire({
        title: 'Empty',
        text: "Fill The Fields" ,
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
       
    }
    else {
    try{
      const response = await AddTaskApi(task)
      console.log(response.data);
      
      if(response.status>=200 && response.status<=300){
      
      setViewtask(response.data)
      Swal.fire({
       title: 'Success',
       text: 'Task Added Successfully',
       icon: 'success',
       confirmButtonText: 'Okay'
     })
     handleClose()
     
       setTask([])
      
    }
    else{
      console.log(response.message);
      Swal.fire({
        title: 'Error',
        text: response.message ,
        icon: 'Error',
        confirmButtonText: 'Okay'
      })
      
    }
  }
   catch(error) {
    console.log(error);
    
   } 
     
  }
  }
  
  return (
    <div>
       
        <Button variant="primary" onClick={() => setShow(true)}>
        <PiUploadFill />
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Task Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Task No"
        className="mb-3"
      >
        <Form.Control onChange={e=>setTask({...task , no:e.target.value})} type="text" placeholder="task no " />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="task Title ">
        <Form.Control onChange={e=>setTask({...task , title:e.target.value})} type="text" placeholder="Task name" />
      </FloatingLabel>  <br />
      <FloatingLabel controlId="floatingPassword" label=" Decription ">
        <Form.Control onChange={e=>setTask({...task , description:e.target.value})} type="text" placeholder="Task name" />
      </FloatingLabel>  <br />
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Summit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default TaskForm