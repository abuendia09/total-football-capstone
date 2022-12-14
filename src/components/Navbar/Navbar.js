import { Link } from "react-router-dom";

//styles
import "./Navbar.css";
import Logo from "../../assets/soccerBall.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="tf-logo" />
          <span>Total Football</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
