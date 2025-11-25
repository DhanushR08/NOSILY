import React, { useEffect, useRef } from 'react';
import Displayhome from './Displayhome';
import DisplayAlbum from './DisplayAlbum';
import { Route, Routes, useLocation } from 'react-router-dom';
import { albumsData } from '../assets/assets';

function Display() {
  const displayref = useRef();
  const loc = useLocation();

  const isAlbum = loc.pathname.includes("album");
  const albumID = isAlbum ? loc.pathname.slice(-1) : "";

  // 🎨 For home → black, For album → gradient using album color
  const bgclr = isAlbum 
    ? albumsData[Number(albumID)]?.bgColor || "#121212" 
    : "#121212";

  useEffect(() => {
    if (displayref.current) {
      displayref.current.style.transition = "background 1s ease";
      if (isAlbum) {
        // Spotify-style gradient (album color → black)
        displayref.current.style.background = `linear-gradient(to bottom, ${bgclr}, #121212 70%)`;
      } else {
        // Home → pure black
        displayref.current.style.background = "#121212";
      }
    }
  }, [bgclr, loc.pathname, isAlbum]);

  return (
    <div 
      ref={displayref} 
      className='w-[300%] m-2 px-6 rounded text-white overflow-auto lg:w-[100%] lg:ml-0'
    > 
      <Routes>
        <Route path='/' element={<Displayhome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display;
