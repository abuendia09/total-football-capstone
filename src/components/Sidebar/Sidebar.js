//imports
import { NavLink } from "react-router-dom";

// styles && images
import "./Sidebar.css";
import SoccerJersey from "../../assets/soccerJersey.svg";
import SoccerField from "../../assets/soccerField.svg";
import SoccerPlayer from "../../assets/soccerPlayer.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="username">
          {/* username here later */}
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/teams">
                <img src={SoccerJersey} alt="teams icon" />
                <span>Your Teams</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={SoccerField} alt="create team icon" />
                <span>Create Team</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/players">
                <img src={SoccerPlayer} alt="player icon" />
                <span>The Players</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
