import { useState, useEffect } from "react";
import axios from "axios";

//components
import Navbar2 from "../Navbar/Navbar2";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

//styles
import "./Teams.css";

export default function Teams() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("/teams")
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="team-container">
      <Sidebar />
      <div className="team-content-title">
        <Navbar2 />
        <div>
          <div className="title-content">
            <h3 className="page-title">
              Here are the ultimate teams you have created:
            </h3>
            <ul>
              {team.map((team) => {
                <li key={team.id} team={team}>
                  {team.team_name}
                </li>;
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
