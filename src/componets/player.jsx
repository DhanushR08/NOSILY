import React, { useContext } from 'react'
import {songsData , assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const {seekBat,seekbg} = useContext(PlayerContext)
  return (
    <div className='h-[20%] bg-black text-white justify-between items-center'>
      <div className='hidden lg:flex items-center gap-3'>
        <img className='w-12' src={songsData [0].image} alt="1" />
      
      
      <div>
        <p className='text-lg'>{songsData [0].name}</p>
         <p>{songsData [0].desc}</p>
      </div>
      </div>
      <div className=' items-center gap-1 m-auto '>
        <div className='flex flex-row justify-center gap-9 mx-auto '>
          
        <img className='w-6 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
        <img className='w-6 cursor-pointer' src={assets.prev_icon} alt="shuffle" />
        <img className='w-6 cursor-pointer' src={assets.play_icon} alt="shuffle" />
        <img className='w-6 cursor-pointer' src={assets.next_icon} alt="shuffle" />
        <img className='w-6 cursor-pointer' src={assets.loop_icon} alt="shuffle" />
       </div>
       <br />
            </div>
          <div className=' flex justify-center'>
       <p className=' gap-2'>0:15</p>
            <div  className='w-[50vw] max-w-[450px] h-2 bg-gray-300 rounded-full cursor-pointer '>
              <hr className='h-2 border-none w-0 bg-red-800 rounded-full '/>
            </div>
            <p className='mb-8'>4:30</p>
            
           <div className="absolute bottom-15  right-10 flex gap-3 opacity-75">
            
  <img className="w-5 h-5" src={assets.play_icon} alt="" />
  <img className="w-5 h-5" src={assets.mic_icon} alt="" />
  < img className="w-5 h-5" src={assets.queue_icon} alt="" />
  <img className="w-5 h-5" src={assets.speaker_icon} alt="" />
  <img className="w-5 h-5 " src={assets.volume_icon } alt=""  />
  <div className='w-20 bg-slate-50 mt-1 h-1 rounded'></div>
  <img className="w-5 h-5" src={assets.mini_player_icon} alt="" />
  <img className="w-5 h-5" src={assets.zoom_icon} alt="" />
</div>

          </div>
    </div>
  )
}

export default Player