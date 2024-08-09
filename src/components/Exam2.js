import React ,{useState} from 'react'
import { addStudent,deleteStudent,toggleStudent ,reCheckAll} from '../redux/studentsSlice';
import { useDispatch,useSelector } from 'react-redux'
import AddStudent from './AddStudent';
export default function Exam2() {
    const [flag,setFlag]=useState("")
    const dispatch=useDispatch();
    const students=useSelector((state)=>state.students.students)
    const checkAll=useSelector((state)=>state.students.checkAll)
    console.log(students)
    const handleAdd =(text)=>{
        dispatch(addStudent(text))
    }
    const filterStudents=(students,flag)=>{
        if(flag=="CHECKED"){
            return students.filter(item=>item.checked)
        }
        else if(flag=="NOCHECKED"){
            return students.filter(item=>!item.checked)
        }
        else{
            return students;
        }
    }
  return (
    <div>
      <h1>Student list: {students.length}</h1>
      <AddStudent addNewStudent={handleAdd} />
      <ul>
        {students&&filterStudents(students,flag).map((student,index) => (
          <li key={index} >
            <p className={student.checked?"student-name active":"student-name"} onClick={()=>dispatch(toggleStudent(student.id))}>  {student.name}</p>
          
            <button onClick={()=>
                dispatch(deleteStudent(student.id))
            }>Delete</button>
           
          </li>
        ))}
      </ul>
      <button onClick={()=>setFlag("CHECKED")}>CHECKED</button>
      <button onClick={()=>setFlag("NOCHECKED")}>NOCHECKED</button>
      <button onClick={()=>setFlag("")}>clear</button>
      <input  type="checkbox" checked={checkAll} onChange={()=>dispatch(reCheckAll())}/>
    </div>
  )
}
