// import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './components/Redux/counterSlice';
// import { increment, decrement, reset } from './Redux/counterSlice'
const Counter = () => {
//    const count = useSelector((state)=>{
//      state.counter.value
//    })

const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch()
  return (
    <div>
        <h1> Count:{count}</h1>
        <button className="btn btn-success" onClick={()=>dispatch(increment())}> Increase </button>
        <button className="btn btn-danger m-5" onClick={()=>dispatch(reset())}> Reset </button>
        <button className="btn btn-secondary" onClick={()=>dispatch(decrement())}> Decrease </button>
    </div>
  )
}

export default Counter