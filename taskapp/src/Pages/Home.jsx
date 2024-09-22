import React, { useEffect, useState } from 'react'
import ViewTask from '../Components/ViewTask'

 import TaskForm from '../Components/TaskForm'

function Home() {

  const [viewTask , setViewTask] =useState("")
  
 
  return (
    <div>
      <div>
        <div>
          <h3 className='text-center mt-5'>
            Add Your Tasks  
            <TaskForm setViewtask ={setViewTask}/>
          </h3>
          <hr />
        </div>
     <div className=''>
     <h3  className='text-center'>Your Tasks</h3>
     <ViewTask viewTask={viewTask}/> 
     </div>
        
      </div>
    </div>
  )
}

export default Home