import React from 'react'
import AddWidgetBtn from './AddWidgetBtn'

export default function WidgetCard({data,setShow,setCat,cat}) {
  return (
    <ul className=' grid grid-cols-3 gap-2 mx-2'>
    {data.length>0 && data.map(wid=>(
      <li key={wid.id} className=' h-[150px] flex flex-col justify-center items-center rounded-md bg-white'>
          <div className=''>{wid.name}</div>
          <div className=''>{wid.text}</div>
      </li>
    ))}
    <AddWidgetBtn setShow={setShow} setCat={setCat} cat={cat}/>

   </ul>
  )
}
