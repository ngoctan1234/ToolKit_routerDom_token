import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { countDown,countUp ,countAdd} from '../redux2/countSlice';
export default function Exam3() {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.count.value)
    console.log("render exam3")
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(countDown())}>Count down</button>
      <button onClick={()=>dispatch(countUp())}>Count up</button>
      <button onClick={()=>dispatch(countAdd(6))}>Count ADD</button>
    </div>
  )
}
