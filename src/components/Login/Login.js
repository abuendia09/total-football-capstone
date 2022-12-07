import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Navbar from "../Navbar/Navbar";
//styles
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4567/login",
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate("/create");
        alert("user has been logged in");
      })
      .catch((error) => {
        alert(error, "User could not be registered.");
      });
  };

  return (
    <div>
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
    </div>
  );
}
