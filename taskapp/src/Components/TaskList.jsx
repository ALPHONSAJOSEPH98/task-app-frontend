import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteTaskApi } from '../Services/AllApis';
import Swal from 'sweetalert2'

function TaskList({data ,setDeleteTask }) {
console.log(data);

  const deletetask =async(id)=>{
    const response = await deleteTaskApi(id)
         
         Swal.fire({
          title: "Video Deleted Sucessfully",
          text: "",
          icon: "warning",
          
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok"
        })
        ;
        setDeleteTask(response)
           console.log(response);
           
  }

  return (
    <div>
      <div className='ms-5 mt-4'>
     
      <Card  style={{ width: '18rem' , height:'300' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
     
      <Card.Body>
         <h6 className='text-center'>{data.no}</h6>
        <Card.Title className='text-center'>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <div className='text-center'>
        <Button onClick={()=>deletetask(data.id)} variant="primary">Delete</Button>
        </div>
        
      </Card.Body>
      
    </Card>
    
      </div>
    </div>
  )
}

export default TaskList