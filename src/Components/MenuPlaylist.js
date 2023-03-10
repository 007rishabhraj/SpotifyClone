import React from "react";
import { PlayList } from "./PlayList";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";

function MenuPlaylist() {
  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playlist" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlaylist };
