import React from 'react'
import {assets} from '../assets/assets'
import Player from './player'
const Sidebar = () => {
  return (
    <div> <div className="flex h-screen">
    <div className="flex h-screen ">
    <aside className="w-80 h-96 bg-gray-950 p-4 rounded-sm flex flex-col">

      <div className="text-2xl font-bold text-red-500 mb-6">NOISLY</div>


      <nav className="flex flex-col  space-y-4">
        <a href="#" class="flex items-center space-x-3 text-gray-200 hover:text-white"><img src={assets.home_icon} alt="home"className='h-6 w-7' /> <span>Home</span> <i data-lucide="home" class="w-5 h-5"></i> </a>
        <a href="#" class="flex items-center space-x-3 text-gray-200 hover:text-white"><img src={assets.search_icon} alt="serach" className='h-6 w-7' /><span>Search</span><i data-lucide="search" class="w-5 h-5"></i></a>
    <hr className="my-4 border-gray-700" />
   <div className='flex items-center gap-3'>
        <a href="#" class="flex items-center space-x-3 text-gray-200 hover:text-white"><img src={assets.stack_icon} alt="lib" className='h-6 w-7' /><span>Your Library</span>  <i data-lucide="library" class="w-5 h-5"></i></a> <img src={assets.arrow_icon} alt="ar"className=' w-4 ml-9 mt-3' />
     <img src={assets.plus_icon} alt="ar" className='h-4 w-4 ml- mt-3' />
       </div>

                </nav>
                <br />
                <div className='flex-col rounded-md bg-[#242424] gap-3 p-4  ml-7flex-row'>
  <p className='text-gray-200 p-2 font-semibold text-lg'>create your Find playlist  </p>
  <p className='text-gray-200  font-light text-sm'>it's easy we will help you </p>  
<br />
  <button className="bg-white space-x-5 m-0 text-black px-6 py-3 rounded-full p-13">create your playlist</button>
</div>
<br />
  <div className='flex-col bg-[#242424] rounded-md gap-3 p-5  mr-  ml-7flex-row'>
  <p className='text-gray-200 p-3 font-semibold text-base'> Let's Find Some Podcasts to Follow </p>
  <p className='text-gray-200 font-light text-sm'>we'll keep you update on new episodes </p>  
<br />
  <button className="bg-white space-x-5 m-0 text-black p-3 px-5 py-2 rounded-full p-13">Browse Podcast</button>
</div>
     <div className="flex-1 overflow-y-auto">
      
      </div>
    </aside>
    
   
  </div>

 

  </div></div>



  )
}

export default Sidebar