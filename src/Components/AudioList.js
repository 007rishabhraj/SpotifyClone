import React from "react";

import { Songs } from "./Songs";
import Toggling from "./Toggling";

function AudioList() {
  return (
    <div className="audioList">
      <h2 className="title">
        The List <span> {`${Songs.length} Songs`}</span>
      </h2>
      <div className="songsContainer">
        {Songs &&
          Songs.map((song, index) => <Toggling song={song} index={index} />)}
      </div>
    </div>
  );
}

export { AudioList };
