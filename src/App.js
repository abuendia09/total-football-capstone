//Imports
import { Route, Routes } from "react-router-dom";

//styles
import "./App.css";

//Components
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path="login"></Route>
        <Route path="register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;

/* pages I need

-- homepage(about)
-- login
-- register
-- create teams
-- players and description

*/
