import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'


const DisplayAlbum = () => {
  const {id} = useParams ();
  const albumsDatalocal = albumsData[id];
  return (
 <><Navbar></Navbar>
    <div className='mt-5 flex gap-8 flex-col md:flex-row md:items-end' >
        <img className='w-40 rounded' src={albumsDatalocal.image} alt="" />
        <div  className='flex flex-col'>
          <p>Playlist</p>
          <h4 className='text-4xl font-bold mb-4  md:text-6xl'>{albumsDatalocal.name}</h4>
          <p className='mt-2'>
            <img className='inline-block w-8 h-12  mt-2 ' src={assets.nosily_logo} alt="" /> <b>Noisly</b> 56,78,453 likes |
          
           <b>      50  songs</b> about 2hr 45 min
</p>

 </div>
 </div>
   <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-4 text-[#a7a7a7]'>     
    <p><b className='mr-4'>#</b>Title</p>
    <p>Album</p>
    <p>Date Added</p>
    <img className='m-auto w-4' src={assets.clock_icon} alt="" />
   </div>
   <hr />

        {
          songsData.map((item,index) => (
            <div key={index} className='grid grid-cols-3 sm:grid-cols-4 pl-4 text-[#a7a7a7] p-2 items-center 
           hover:bg-[#ffffff2b] cursor-pointer '>
          <p className='text-white'><b  className='mr-4 text-[#a7a7a7] items-center'>{index+1 }</b>
          <img className='inline w-10 mr-20' src={item.image} alt="" />
          {item.name}
          </p>
             <p className='text-[15px]'>{albumsDatalocal.name}</p>
             <p className='text-[15px]'>3days</p>
             <p className='text-[15px] text-center'>{item.duration}</p>
           </div>
          ))
        }
     </>
  )
}

export default DisplayAlbum