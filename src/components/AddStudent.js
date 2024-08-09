import { configureStore } from '@reduxjs/toolkit'
import React ,{useState} from 'react'

export default function AddStudent(props) {
    const [text,setText]=useState("")
    const {addNewStudent}=props
    
  return (
    <div>
      <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}
      onKeyDown={(e)=>{
        if(e.key==="Enter"){
            addNewStudent(text)
            setText("")
        }
      }}
      />
      
      
    </div>
  )
}
