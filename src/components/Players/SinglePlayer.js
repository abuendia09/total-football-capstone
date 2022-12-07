import React from "react";

//styles
import "./SinglePlayer.css";
import Star from "../../assets/star.svg";

export default function SinglePlayer({ player }) {
  return (
    <div className="single-player">
      <h4 player-name>
        {player.first_name} {player.last_name}
      </h4>
      <p>
        {player.player_position}
        {player.stars} <img className="player-star" src={Star} />
      </p>
      <img className="player-picture" src={player.image_url} />
      <p className="player-description">{player.description}</p>
    </div>
  );
}
