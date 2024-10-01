import React from 'react'
import Counter from './Components/Counter'
import Todo from './Components/Todo/Todo'
function Page() {
  return (
    <div className='flex gap-5 p-12 justify-between w-full min-h-screen'>
        <Todo/>
        <Counter/>
    </div>
  )
}

export default Page