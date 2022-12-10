import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//components
import Navbar2 from "../Navbar/Navbar2";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

//styles & images
import "./Create.css";
import SoccerField from "../../assets/SoccerField2.png";

export default function Create() {
  const [teamName, setTeamName] = useState("");
  const [goalkeeper, setGoalkeeper] = useState([]);
  const [rightback, setRightback] = useState([]);
  const [leftback, setLeftback] = useState([]);
  const [rightCb, setRightCb] = useState([]);
  const [leftCb, setLeftCb] = useState([]);
  const [rightCm, setRightCm] = useState([]);
  const [leftCm, setLeftCm] = useState([]);
  const [cam, setCam] = useState([]);
  const [leftwing, setLeftwing] = useState([]);
  const [rightwing, setRightwing] = useState([]);
  const [striker, setStriker] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/create")
      .then((res) => {
        console.log(res);
        navigate("/teams");
        alert("Team has been created");
      })
      .catch((error) => {
        alert(error, "team could not be created.");
      });
  };

  useEffect(() => {
    axios
      .get("/goalkeeper")
      .then((res) => {
        setGoalkeeper(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/rightback")
      .then((res) => {
        setRightback(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/leftback")
      .then((res) => {
        setLeftback(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/leftcb")
      .then((res) => {
        setLeftCb(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/rightcb")
      .then((res) => {
        setRightCb(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/rightcm")
      .then((res) => {
        setRightCm(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/leftcm")
      .then((res) => {
        setLeftCm(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/cam")
      .then((res) => {
        setCam(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/leftwing")
      .then((res) => {
        setLeftwing(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/rightwing")
      .then((res) => {
        setRightwing(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/striker")
      .then((res) => {
        setStriker(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onOptionChangeHandler = (event) => {
    console.log("user Selected -", event.target.value);
  };
  return (
    <div className="create-container">
      <Sidebar />
      <div className="navbar-content">
        <Navbar2 />
        <div className="create-content">
          <div className="create-title">
            <h1 className="create-header">
              It's time to build that Ultimate Team!
            </h1>
            <p className="create-paragraph">
              First enter your team name and then choose your players.
            </p>
          </div>
          <form className="create-form">
            <div>
              <label>
                <span>Team Name:</span>
              </label>
              <input
                type="text"
                required
                onChange={(e) => setTeamName(e.target.value)}
                value={teamName}
              />
            </div>
            <div className="field-content">
              <img src={SoccerField} alt="soccer-field" />
              <div className="player-gk">
                <label htmlFor="goalkeeper"></label>
                <select
                  name="goalkeeper"
                  id="goalkeeper"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>GK</option>
                  {goalkeeper.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-rb">
                <label htmlFor="rightback"></label>
                <select
                  name="rightback"
                  id="rightback"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>RB</option>
                  {rightback.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-lcb">
                <label htmlFor="left-cb"></label>
                <select
                  name="left-cb"
                  id="left-cb"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>CB</option>
                  {leftCb.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-rcb">
                <label htmlFor="right-cb"></label>
                <select
                  name="right-cb"
                  id="right-cb"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>CB</option>
                  {rightCb.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-lb">
                <label htmlFor="leftback"></label>
                <select
                  name="leftback"
                  id="leftback"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>LB</option>
                  {leftback.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-lcm">
                <label htmlFor="left-cm"></label>
                <select
                  name="left-cm"
                  id="left-cm"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>CM</option>
                  {leftCm.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-rcm">
                <label htmlFor="right-cm"></label>
                <select
                  name="right-cm"
                  id="right-cm"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>CM</option>
                  {rightCm.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-cam">
                <label htmlFor="attack-mid"></label>
                <select
                  name="attack-mid"
                  id="attack-mid"
                  required
                  requiredonChange={onOptionChangeHandler}
                >
                  <option>CAM</option>
                  {cam.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-lw">
                <label htmlFor="leftwing"></label>
                <select
                  name="leftwing"
                  id="leftwing"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>LW</option>
                  {leftwing.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-rw">
                <label htmlFor="rightwing"></label>
                <select
                  name="rightwing"
                  id="rightwing"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>RW</option>
                  {rightwing.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="player-st">
                <label htmlFor="striker"></label>
                <select
                  name="striker"
                  id="striker"
                  required
                  onChange={onOptionChangeHandler}
                >
                  <option>ST</option>
                  {striker.map((players) => {
                    return (
                      <option key={players.id}>{players.first_name}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <button className="create-btn">Create your Team</button>
              </div>
            </div>
          </form>
          <Footer />
        </div>
      </div>
    </div>
  );
}
