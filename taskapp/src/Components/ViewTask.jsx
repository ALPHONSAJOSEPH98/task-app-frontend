import React, { useEffect, useState } from 'react'
import { viewtaskApi } from '../Services/AllApis'
import TaskList from './TaskList'
import {Row , Col}  from  'react-bootstrap'


function ViewTask({viewTask}) {
  const [deleteTask ,setDeleteTask] = useState('')
  const [alltask , setAllTask] =useState([])
 const gettask = async()=>{
  try{
   const response = await viewtaskApi()
   if(response.status>=200 && response.status<=300){ 
   setAllTask(response.data)
   
   console.log(response.data)
  } 
  else{
    console.log(response.message);
    
  }
 }
 catch(error){
console.log(error);

 }}
 useEffect(()=>{gettask()},[ viewTask, deleteTask])
  return (
    <div> <Row>
      {alltask.map(item=>(<Col><TaskList setDeleteTask={setDeleteTask} data ={item}/></Col>))
       
      }
      </Row>
    </div>
  )
}

export default ViewTask