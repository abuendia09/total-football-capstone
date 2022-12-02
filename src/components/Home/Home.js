import Navbar from "../Navbar/Navbar";

//styles
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <p className="page-title-content">Teamwork makes the dream work!</p>
        <p className="paragraph-content">
          No matter where you watch a football match, one thing never changes.
          <br />
          That one thing is the passion that everyone around the game contains
          for football. Regardless of what part of the world you are in, the
          passion for the sport remains the same. <br />
          The same passion that is seen in homes across the world is seen at the
          stadium and on the pitch during each matchday. <br /> Every major
          stadium in world football is packed each weekend with fans that would
          do anything for their club and players that would do the same. <br />
          No other sport in the world can rival the passion during matches and
          in the week leading up to each match every week in world football.
          <br />
          With that in mind, let us help you build the ultimate football team
          out of the 33 best players around the world we have chosen for you.
        </p>
      </div>
    </div>
  );
}
