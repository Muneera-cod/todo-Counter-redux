import React, { useState } from 'react'
import { IconTrashFilled,IconEdit,IconMagnet } from '@tabler/icons-react'
import { useSelector,useDispatch } from 'react-redux'
import { addtodo, deltodo, edittodo } from '../../Redux/Slice/TodoSlice'
function Todo() {
  const [newtodo,setNewtodo]=useState('')
  const [editTodo,setEditTodo]=useState('')
  const [editing,setEditing]=useState(false)
  const [currid,setCurrid]=useState('')
  const todos=useSelector((state)=>state.todo)
  const dispatch=useDispatch()
  function todoadd(){
    if(newtodo){
    dispatch(addtodo(newtodo))}
    setNewtodo('')
  }
  function tododel(id){
     dispatch(deltodo(id))
  }
  function todoedit(id,text){
    setCurrid(id)
    setEditing(true)
    setEditTodo(text)
   
   

    
  }
  function saveEdit() {
  dispatch(edittodo({id:currid,text:editTodo}))
  setEditing(false)

  }
console.log(editTodo)
  return (
    <div className='flex flex-col bg-zinc-100 p-6 basis-1/2 h-700 gap-4'>
        <div className='flex gap-4 w-full mb-3'>
            <input className='rounded w-full p-2' value={newtodo} onChange={(e)=>{setNewtodo(e.target.value)}}></input>
            <button className='bg-indigo-100 p-2 rounded' onClick={todoadd}>Add</button>
        </div>
        {todos.map((t)=>{
          return(<>
        <div className='hover:bg-zinc-200 p-4  flex justify-between items-center' key={t.id} value={editTodo}>{editing && t.id===currid?editTodo:t.text}
          <div className='flex gap-2'>
            <button className='bg-yellow-50 p-3 border-2 border-yellow-500 rounded' onClick={()=>todoedit(t.id,t.text)}><IconEdit className='text-yellow-500'/></button>
            <button className='bg-red-300 p-3 border-2 border-red-500 rounded' onClick={()=>tododel(t.id)}><IconTrashFilled className='text-red-500'/></button>
          </div>
        </div>
        {editing && t.id===currid?
        <div className='p-4 bg-white flex justify-between items-center' >
          <input className='rounded w-full w-full h-full' value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}></input>
          <button className='bg-yellow-50 p-3 border-2 border-yellow-500 rounded'><IconMagnet onClick={saveEdit}/></button>  
        </div>:null}</>
      )})}

        
    </div>
  )
}

export default Todo