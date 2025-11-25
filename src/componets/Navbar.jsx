import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav = useNavigate()
  return (
    <>    <div  className='w-full flex justify-between items-center font-semibold'>
<div className='flex items-center  gap-2'>
    <img onClick={() => nav(-1)} className='w-8 bg-black p-2  rounder-2xl cursor-pointer' src={assets.arrow_left} alt="" />
  <img onClick={() => nav(1)} className='w-8 bg-black p-2  rounder-2xl cursor-pointer' src={assets.arrow_right} alt="" />

</div>
<div className='flex items-center gap-4' >

<p  className=' px-3 py-1  bg-white text-black w-55 h-8 rounded-2xl text-[16px] font-semibold text-ls cursor-pointer'>Noisly permium</p><p className=' px-3 py-1  bg-blck text-white w-55 h-8 rounded-2xl text-[16px] font-semibold text-ls cursor-pointer'> Install app</p>
<p  className=' px-3 py-1 w-8 bg-orange-400 text-black w-55 h-8 rounded-full text-[16px] font-semibold text-xs cursor-pointer'>V</p>
</div>

    </div>
    <div className='flex  items-center gap-2 mt-2 '>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>

    </div>
    </>

  )
}

export default Navbar