import React, { Suspense } from 'react'
import { lazy } from 'react'
import Counter from './Components/Counter'
import Loading from './Components/Loading'
const Todo =lazy(()=>import ('./Components/Todo/Todo'))
function Page() {
  return (
    <div className='flex gap-5 p-12 justify-center w-full min-h-screen bgimage'>
      <Suspense fallback={<Loading/>}>
      <Todo/>
      </Suspense>
       
        {/* <Counter/> */}
    </div>
  )
}

export default Page