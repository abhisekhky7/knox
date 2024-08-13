import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import AddCategory from './AddCategory';


export default function Header({onSearch}) {
  const[search,setSearch] = useState("");
 const[show,setShow]=useState(false)

  const handleSearch = (e)=>{
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className='flex items-center '>
        <div className='w-1/2 flex items-center'>
            <p className='text-sm'>Home &gt; <span className='text-blue-400 font-bold'>Dashboard V2</span></p>
        </div>
        <div className='w-2/6 border border-gray-500 m-1 rounded-lg flex justify-end '>
          <div className=' w-full flex items-center'>  
            <IoSearch className='text-gray-500 mx-1'/> 
          <input className='outline-none w-full mx-1' type='text' value={search} onChange={(e)=>handleSearch(e)} placeholder='Search anything'/>
          </div>
          
        </div>
        <div className=' mx-4 text-sm cursor-pointer' onClick={()=>setShow(true)}> <span className='border p-1 rounded-md'>
          Add Category</span>
        </div>
      {show && (
        <AddCategory setShow={setShow} />
      )}
    </div>
  )
}
