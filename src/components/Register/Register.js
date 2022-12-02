//styles
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4567/register",
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((error) => {
        alert(error, "User could not be registered.");
      });
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button className="btn">Sign Up</button>
    </form>
  );
}
