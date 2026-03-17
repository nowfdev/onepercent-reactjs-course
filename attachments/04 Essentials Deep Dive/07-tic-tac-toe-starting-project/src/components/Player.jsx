import React, { useState } from "react";

const Player = ({ initName, symbol }) => {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function clickHandler() {
    setIsEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  let editableNamePlayer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableNamePlayer = (
      <input type="text" required value={playerName} onChange={changeHandler} />
    );
  }
  return (
    <li>
      <span className="player">
        {editableNamePlayer}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
