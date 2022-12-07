//imports
import Navbar2 from "../Navbar/Navbar2";
import Sidebar from "../Sidebar/Sidebar";

//styles & images
import "./Create.css";
import SoccerField from "../../assets/SoccerField2.png";
import { useState } from "react";

export default function Create() {
  const [teamName, setTeamName] = useState("");
  return (
    <div className="create-container">
      <Sidebar />
      <div className="navbar-content">
        <Navbar2 />
        <div className="create-content">
          <div className="create-title">
            <h1 className="create-header">
              It's time to build that Ultimate Team!
            </h1>
            <p className="create-paragraph">
              First enter your team name and then choose your players.
            </p>
          </div>
          <form className="create-form">
            <div>
              <label>
                <span>Team Name:</span>
              </label>
              <input
                type="text"
                required
                onChange={(e) => setTeamName(e.target.value)}
                value={teamName}
              />
            </div>
            <div className="field-content">
              <img src={SoccerField} />
              <div className="player-gk">
                <label htmlFor="goalkeeper">GK</label>
                <select name="goalkeeper" id="goalkeeper" required></select>
              </div>
              <div className="player-rb">
                <label htmlFor="rightback">RB</label>
                <select name="rightback" id="rightback" required></select>
              </div>
              <div className="player-lcb">
                <label htmlFor="left-cb">CB</label>
                <select name="left-cb" id="left-cb" required></select>
              </div>
              <div className="player-rcb">
                <label htmlFor="right-cb">CB</label>
                <select name="right-cb" id="right-cb" required></select>
              </div>
              <div className="player-lb">
                <label htmlFor="leftback">LB</label>
                <select name="leftback" id="leftback" required></select>
              </div>
              <div className="player-lcm">
                <label htmlFor="left-cm">CM</label>
                <select name="left-cm" id="left-cm" required></select>
              </div>
              <div className="player-rcm">
                <label htmlFor="right-cm">CM</label>
                <select name="right-cm" id="right-cm" required></select>
              </div>
              <div className="player-cam">
                <label htmlFor="attack-mid">CAM</label>
                <select name="attack-mid" id="attack-mid" required></select>
              </div>
              <div className="player-lw">
                <label htmlFor="leftwing">LW</label>
                <select name="leftwing" id="leftwing" required></select>
              </div>
              <div className="player-rw">
                <label htmlFor="rightwing">RW</label>
                <select name="rightwing" id="rightwing" required></select>
              </div>
              <div className="player-st">
                <label htmlFor="striker">ST</label>
                <select name="striker" id="striker" required></select>
              </div>
              <div>
                <button className="create-btn">Create your Team</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
