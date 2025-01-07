import React from 'react'
import { useParams } from 'react-router-dom'

function Contact() {
  //useParams returns an object
    const {id}=useParams();
  return (
    <div>

        <h1>Contact {id}</h1>
      
    </div>
  )
}

export default Contact
