import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrementby1, decrementby5, incrementby1, incrementby5 } from '../Redux/Slice/CounterSlice'
function Counter() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  console.log(count)
  return (
    <div className='flex gap-8  rounded basis-1/2 pl-28 h-fit'>
        <button className='p-4 bg-green-500 text-sm font-bold' onClick={()=>dispatch(incrementby1())}>INCREMENT by 1</button>
        <button className='p-4 bg-green-500 text-sm font-bold' onClick={()=>dispatch(incrementby5())}>INCREMENT by 5</button>
        <div className='py-4 px-8 border-2 border-black font-bold flex items-center justify-center'>{count}</div>
        <button className='p-4 bg-green-500 rounded text-sm font-bold' onClick={()=>dispatch(decrementby5())}>DECREMENT by 5</button>
        <button className='p-4 bg-green-500 rounded text-sm font-bold' onClick={()=>dispatch(decrementby1())}>DECREMENT by 5</button>
         
    </div>
  )
}

export default Counter