import React, { useEffect, useState } from 'react'
import AddWidget from './AddWidget'
import WidgetCard from './WidgetCard'

export default function WidgetContainer() {

    const [widget,setWidget]= useState([])
    const[show,setShow] = useState(null)
    const[cat,setCat]=useState('')

    const handleAddWidget = (d)=>{
      const newWidget = {
        id: Date.now(),
        "name":d.name,
        "text":d.text,
        "cat":cat
      }
      setWidget([...widget, newWidget])
      console.log(newWidget)
    }

    useEffect(()=>{
      const storedWidget = localStorage.getItem("widget");
      if(storedWidget){
        setWidget(JSON.parse(storedWidget))
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('widget',JSON.stringify(widget))
    },[widget])
   
    const cspm = widget.filter((item)=>item.cat === 'cspm')
    const cwpp = widget.filter((item)=> item.cat === 'cwpp')

  return (
    <div className='bg-slate-200 p-1'  >
        <p className='font-semibold'>CNAPP Dashboard</p>
        <div className=''>
           <div className='m-1 mt-3 font-semibold'> CSPM Executive Dashboard</div>
            <WidgetCard data={cspm} setShow={setShow} setCat={setCat} cat='cspm'/>
        </div>
        <div>
           <div className='m-1 mt-4 font-semibold'> CWPP Dashboard</div>
           
            <WidgetCard data={cwpp} setShow={setShow} setCat={setCat} cat='cwpp'/>

        </div>
           <div> {show && <AddWidget setShow={setShow} handleAddWidget={handleAddWidget} />} </div>

    </div>
  )
}
