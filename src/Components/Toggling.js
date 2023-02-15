import React, { useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";

const Toggling = (props) => {
  const [favourite, setFavourite] = useState(props.song?.favourite);
  const clickHandler = () => {
    setFavourite((prevState) => !prevState);
  };

  return (
    <div className="songs" key={props.song?.id}>
      {/* (?. optional chaining) */}
      <div className="count">{`#${props.index + 1}`}</div>
      <div className="song">
        <div className="imgBox">
          <img src={props.song?.imgSrc}></img>
        </div>
        <div className="section">
          <p className="songName">
            {props.song?.songName}
            <span className="spanArtist">{props.song.artist}</span>
          </p>

          <div className="hits">
            <p className="hit">
              <i>
                <FaHeadphones />
              </i>
              95,490,102
            </p>

            <p className="duration">
              <i>
                <FaRegClock />
              </i>
              03:04
            </p>
            <div onClick={clickHandler} className="favourite">
              {favourite ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggling;
