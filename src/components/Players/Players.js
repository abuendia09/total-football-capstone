import axios from "axios";
import { useEffect, useState } from "react";

//components
import SinglePlayer from "./SinglePlayer";
import Sidebar from "../Sidebar/Sidebar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
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
      <div className="navbar-content">
        <Navbar2 />
        <div className="player-content">
          <h3 className="page-title">The 33 Ultimate Players Info</h3>
          <div className="player-grid">
            {playerList.map((player) => {
              return <SinglePlayer key={player.id} player={player} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
