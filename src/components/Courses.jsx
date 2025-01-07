import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Courses() {
  // searchParams is instance of URLSearchParams
 const[searchParams,setSearchParams]= useSearchParams()
 console.log(searchParams.get('course'))
  return (
    <div>
      
      <h1>Courses</h1>
    </div>
  )
}

export default Courses
