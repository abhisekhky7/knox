import React from 'react'
import { IoSearch } from "react-icons/io5";


export default function Header() {
  return (
    <div className='flex '>
        <div className='w-1/2 flex items-center'>
            <p className='text-sm'>Home &gt; <span className='text-blue-400 font-bold'>Dashboard V2</span></p>
        </div>
        <div className='w-2/6 border border-gray-500 m-1 rounded-lg flex justify-end '>
          <div className=' w-full flex items-center'>  
            <IoSearch className='text-gray-500 mx-1'/> 
          <input className='outline-none w-full mx-1' type='text' placeholder='Search anything'/>
          </div>
        </div>
    </div>
  )
}
