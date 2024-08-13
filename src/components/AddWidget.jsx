import React, { useState } from 'react'

export default function AddWidget({setShow,handleAddWidget,cat}) {
const[name,setName]=useState('')
const[text,setText]=useState('')
const handleClick=()=>{
  if(name.length <= 0)return;
  handleAddWidget({name,text,cat});
  setName('')
  setText('')
}
  return (
    <div className='h-svh w-2/4 border-2 border-black z-10 absolute right-0 top-0 bg-slate-200'>
    
      <div className='flex bg-blue-900 text-white py-2'> 
        <div className='flex w-1/2 ml-4'>
          <p >Add Widget</p>
        </div>
        <div className='flex  w-1/2 justify-end mx-2'>
         <button onClick={()=>setShow(false)}>X</button> 
        </div>
      </div>

     

      <div className=' mt-[10%] ml-5'>
      <div className='m-1 flex justify-center'>  <input type="text" placeholder='Enter widget name' value={name} onChange={(e)=>setName(e.target.value)} /></div>
       <div className='m-1 flex justify-center'> <input type="text" placeholder='Enter widget text' value={text}  onChange={(e)=>setText(e.target.value)} /></div>
       <div className='flex justify-center '>
        <button className='' onClick={handleClick} >Add</button> </div>
      </div>
  
    </div> //parent
  )
}
