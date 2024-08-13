import React from 'react'
import AddWidgetBtn from './AddWidgetBtn'
import { IoClose } from "react-icons/io5";


export default function WidgetCard({data,setShow,setCat,cat,handleRemove}) {
  const filteredData = data.filter((item)=>item.checked)
  return (
    <ul className=' grid grid-cols-3 gap-2 mx-2'>
    {filteredData.length>0 &&  filteredData.map(wid=>(
      <li key={wid.id} className=' h-[150px]  rounded-md bg-white'>
          <div className=' w-full flex justify-end px-3 text-red-600 text-xl' >
            <span className='pt-2 cursor-pointer' onClick={()=>handleRemove(wid.id)} ><IoClose/></span>
            </div>
          <div className='flex flex-col justify-center items-center h-[80%]'>
          <div>{wid.name}</div>
          <div>{wid.text}</div>
          </div>
      </li>
    ))}
    <AddWidgetBtn setShow={setShow} setCat={setCat} cat={cat}/>

   </ul>
  )
}
