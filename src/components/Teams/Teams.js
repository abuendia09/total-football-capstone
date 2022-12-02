//imports
import Navbar2 from "../Navbar/Navbar2";
import Sidebar from "../Sidebar/Sidebar";

//styles
import "./Teams.css";
export default function Teams() {
  return (
    <div className="team-container">
      <Sidebar />
      <div className="team-content-title">
        <Navbar2 />
        <div>
          <div className="title-content">
            <h3 className="page-title">Here are the ultimate teams you have created:</h3>
          </div>
        </div>
      </div>
    </div>
  );
}