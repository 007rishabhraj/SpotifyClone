import React from 'react';
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../img/track.png";

function TrackList({trackName,artistName}) {
  return (
    <div className="tracklist">
      <div className="top">
        <img src={Track} alt="" />  
    
        <p>
          sample
          <span>artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" />

        <i>
          <BsMusicNoteList />
        </i>

        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export  {TrackList}