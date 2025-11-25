import React from 'react'
import { useNavigate } from 'react-router-dom'


const Albumitems = (props) => {
  const nav = useNavigate()
  return (
    <div onClick={()=> nav(`/album/${props.id}`)} className='min-w-[200px] max-w-[250px] hover:bg-[#ffffff26] p-2 px-3 rounded'>
      
        <img className='rounded ' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'> {props.name}</p>
        <p className='text-slate-200 text-sm'> {props.desc}</p>
    </div>
  )
}

export default Albumitems