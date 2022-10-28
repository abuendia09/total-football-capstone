import logo from "../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="image" />
      <h2 className="text">Welcome to Total Football</h2>
    </div>
  );
}
