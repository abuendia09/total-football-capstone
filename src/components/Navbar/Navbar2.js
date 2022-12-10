import { useNavigate } from "react-router-dom";

//styles
import "./Navbar.css";
import Logo from "../../assets/soccerBall.svg";
import axios from "axios";

export default function Navbar2() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios.delete("/logout").then((res) => {
      alert("you have been logged out");
      navigate("/");
    });
  };
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="tf-logo" />
          <span>Total Football</span>
        </li>
        <li>
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
