import React, { useState } from 'react'

export default function AddCategory({setShow}) {
const [selected,setSelected]=useState('cspm')

  return (
    <div className='h-svh w-2/4 border-2 border-black z-10 absolute right-0 top-0 bg-slate-200'>
    
      <div className='flex bg-blue-900 text-white py-2'> 
        <div className='flex w-1/2 ml-4'>
          <p >Add Category</p>
        </div>
        <div className='flex  w-1/2 justify-end mx-2'>
         <button onClick={()=>setShow(false)}>X</button> 
        </div>
      </div>
    <div className='flex m-1'>
        <p className='m-1 font-semibold cursor-pointer' onClick={()=>setSelected('cspm')}
         style={selected === 'cspm'?{borderBottom:"2px solid black"}:{}}>
            CSPM</p>
        <p className='m-1 font-semibold cursor-pointer' onClick={()=>setSelected('cwpp')} 
        style={selected === 'cwpp'?{borderBottom:"2px solid black"}:{}}>
            CWPP</p>
    </div>
    
    
  
    </div> //parent
  )
}

