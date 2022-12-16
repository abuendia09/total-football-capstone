import React from "react";

//styles
import "./SinglePlayer.css";

export default function SinglePlayer({ player }) {
  return (
    <div className="single-player">
      <h4 className="player-name">
        {player.first_name} {player.last_name}
      </h4>
      <p className="player-position">{player.player_position}</p>
      <img
        className="player-picture"
        src={player.image_url}
        alt="Player here"
      />
      <p className="player-description">{player.description}</p>
    </div>
  );
}
