import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
//styles
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", { username, password })
      .then((res) => {
        console.log(res.data);
        navigate("/create");
        alert("user has been logged in");
      })
      .catch((error) => {
        alert(error, "User could not be registered.");
      });
  };

  return (
    <div className="login-container">
      <Navbar />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Username:</span>
          <input
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            autoComplete="on"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="on"
          />
        </label>
        <button className="login-btn">Login</button>
      </form>
      <Footer />
    </div>
  );
}
