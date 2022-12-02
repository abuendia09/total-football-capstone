import axios from "axios";
import { useEffect, useState } from "react";
import SinglePlayer from "./SinglePlayer";
import Sidebar from "../Sidebar/Sidebar";
import Navbar2 from "../Navbar/Navbar2";
//styles
import "./Players.css";

export default function Players() {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios
      .get("/players")
      .then((res) => {
        setPlayerList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="player-container">
      <Sidebar />
      <div className="player-content-title">
        <Navbar2 />
        <div>
          <h3 className="page-title">Meet the players</h3>
          <div className="player-grid">
            {playerList.map((player) => {
              return <SinglePlayer key={player.id} player={player} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
