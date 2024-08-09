import React ,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addStudent,deleteStudent } from '../redux2/listSlice';
import Add from './Add';
export default function ToDoList() {
    const [flag,setFlag]=useState("")
    const students=useSelector(state=>state.students.students)
    const dispatch=useDispatch()
    console.log("render todolist")
    const handle_add=(text)=>{
        dispatch(addStudent(text))
    }
    const filterStudent=(list,flag)=>{
        if(flag=="CHECKED"){
            return list.filter(item=>item.checked)
        }
        else  if(flag=="NOCHECKED"){
            return list.filter(item=>!item.checked)
        }
        else{
            return list;
        }
    }
  return (
    <div>
       <Add  handle_add={handle_add}/>
      {
        filterStudent(students,flag).map((item,index)=>
        <div key={index}>
            
            {item.name}
            <button onClick={()=>dispatch(deleteStudent(item.id))}>Delete</button>
        </div>)
      }
      <button onClick={()=>setFlag("CHECKED")}>CHECKED</button>
      <button onClick={()=>setFlag("NOCHECKED")}>NOCHECKED</button>
      <button onClick={()=>setFlag("CLEAR")}>CLEAR</button>
    </div>
  )
}
