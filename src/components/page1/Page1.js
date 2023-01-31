import React, { useState } from 'react'
import '../page1/Page1.css'
import food from '../asset/food.jpg'
import Nav from '../Nav/Nav'
import Sidebar from '../Nav/Sidebar'
import { ToggleButton } from '@mui/material'



function Page1() {

  // const [isActive,setActive]=useState(true);
  // const[open,setOpen]=useState(false);
  
    
  // const handle =()=>{
  //   setActive(Active =>!Active);
  
  //   setOpen(true);
   
  // }

  return (
    <>
     {/* {open &&<Sidebar close={()=>setOpen(!open)}/>} */}
      <div className='page1'>
      
      <img className='page1img' src={food}/>
      </div>
      <div className='page1contant'style={{zIndex:'0',marginTop:'-80px'}}>
          <h2 className='page1h2'>Welcome to our tempale</h2>
          <h1 className='page1h1'style={{marginTop:"20px"}}>This life style for your fitness</h1>
          <span className='page1span'>
          <button sx={{color:"black"}} className='page1btn' style={{marginTop:"20px"}}>ABOUT ME</button>
          </span>
        </div>

    </>
  )
}

export default Page1
