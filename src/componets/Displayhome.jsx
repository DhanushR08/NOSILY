import React from 'react'
 import Display from './Display'
 import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { assets } from '../assets/assets'
import Albumitems from './Albumitems'
import Songsitems from './Songitems'
import { songsData } from '../assets/assets'




const Displayhome = () => {
  return (
    <div>

      <Navbar></Navbar>

     <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'> Your Top playlist </h1>
      <div className='flex overflow-auto'>     
         {albumsData.map((item,index) => (
          <Albumitems 
          
          key = {index} 
          name = {item.name}
          id={item.id} 
          desc={item.desc}
           image ={item.image}>

           </Albumitems>))}

    </div>
</div>

  <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'> Recently playled </h1>
      <div className='flex overflow-auto'>     
         {songsData.map((item,index) => (
          <Songsitems 
          key = {index} 
          name = {item.name} 
          desc={item.desc}
          id = {item.id}
           image ={item.image}>

           </Songsitems>))}

    </div>
</div>






      






    </div>
  )
}

export default Displayhome