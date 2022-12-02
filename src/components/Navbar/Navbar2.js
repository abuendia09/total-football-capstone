import { Link } from "react-router-dom";

//styles
import "./Navbar.css";
import Logo from "../../assets/soccerBall.svg";

export default function Navbar2() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="tf-logo" />
          <span>Total Football</span>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}
