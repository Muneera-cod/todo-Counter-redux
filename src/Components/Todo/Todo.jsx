import React, { useEffect, useRef, useState } from 'react'
import { IconTrashFilled,IconEdit,IconDeviceFloppy,IconX} from '@tabler/icons-react'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux'
import { addtodo, deltodo, edittodo} from '../../Redux/Slice/TodoSlice'
function Todo() {
  const [newtodo,setNewtodo]=useState('')
  const [editTodo,setEditTodo]=useState('')
  const [editing,setEditing]=useState(false)
  const [currid,setCurrid]=useState('')
  const[hide,setHide]=useState(true)
  const inputRef=useRef(null)
  const todos=useSelector((state)=>state.todo)
  const dispatch=useDispatch()
 
  useEffect(() => {
    if (editing && hide) {
      inputRef.current?.focus()
    }
  }, [editing, hide])
  
  function todoadd(){
    if(newtodo){
    dispatch(addtodo(newtodo))}
    setNewtodo('')
    toast("New Task added!")
  }
  function tododel(id){
     dispatch(deltodo(id))
     toast("Task deleted successfully")
  }
  function todoedit(id,text){
    setCurrid(id)
    setEditing(true)
    setEditTodo(text)
     setHide(true) 
  }
  function saveEdit() {
  dispatch(edittodo({id:currid,text:editTodo}))
  setEditing(false)
  setEditTodo('')
  setCurrid('')
  toast("Edited your task successfully")
  

  }
console.log(editTodo)
  return (
    <div className='flex flex-col bg-zinc-100 p-6 sm:basis-full md:basis-9/12 lg:basis-1/2 h-700 gap-4 bg-opacity-50 rounded'>
        <div className='flex gap-2 w-full mb-3'>
          <ToastContainer/>
            <input className='rounded w-full p-2' value={newtodo} onChange={(e)=>{setNewtodo(e.target.value)}}></input>
            <button className='bg-indigo-100 p-2 rounded border-2 border-blue-600 text-blue-800 font-bold hover:bg-blue-800 hover:text-indigo-100' onClick={todoadd}>Add</button>
        </div>
        {todos.length===0?<div className=' flex h-full items-center text-zinc-500 hover:text-zinc-900 justify-center font-bold'>No tasks added 🌤️🧘‍♀️</div>:todos.map((t)=>{
          return(<>
        {t.text?<div className='hover:bg-zinc-50  hover:bg-opacity-80  p-4 rounded flex justify-between items-center break-normal' key={t.id} value={editTodo}>{editing && t.id===currid && hide?editTodo:t.text}
          <div className='flex gap-2'>
            <button className='hover:bg-yellow-50 p-3  rounded-full' title='Edit' onClick={()=>todoedit(t.id,t.text)}><IconEdit className='text-yellow-500'/></button>
            <button className='hover:bg-red-300 p-3 rounded-full' title='Delete' onClick={()=>tododel(t.id)}><IconTrashFilled className='text-red-500'/></button>
          </div>
        </div>:null}
        {editing && t.id===currid && hide?
        <div className='p-4 bg-white flex justify-between items-center gap-3 rounded' >
          <input className='rounded w-full w-full h-full' value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} ref={inputRef}></input>
          <div className='flex gap-2'>
          <button className='hover:bg-green-50 p-3  rounded-full' title='Save' onClick={saveEdit}><IconDeviceFloppy className='text-green-500'/></button>
          <button className='hover:bg-red-50 p-3  rounded-full' title='Save' onClick={()=>setHide(false)}><IconX className='text-red-500'/></button>    
          </div>
        
        </div>:null}</>
      )})}

        
    </div>
  )
}

export default Todo