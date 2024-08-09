import React from 'react'
import { increment,decrement ,incrementByAmount} from '../redux/countSlice'
import { useDispatch,useSelector } from 'react-redux'
export default function Exam1() {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.count.value)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>Count up</button>
      <button onClick={()=>dispatch(decrement())}>Count down</button>
      <button onClick={()=>dispatch(incrementByAmount(4))}>Count up</button>
      
    </div>
  )
}
