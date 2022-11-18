import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
