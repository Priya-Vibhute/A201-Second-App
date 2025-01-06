import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from "react-router"


function About() {
    const navigate=useNavigate()
  return (
    <div>
       <h1>About</h1>
       <button className='btn btn-primary' onClick={()=>{navigate("/contact/1")}}>Click here to go contact page</button>

       <div className='border border-dark border-5'>
          <Outlet/>
       </div>
    </div>
  )
}

export default About
