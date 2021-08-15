import "./HomePage.css";
import macbook from "./macbook_mockup.png";
import MainNav from "../components/layout/MainNav";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <div className="home__landing">
        <div className="app-name">
          <MainNav />
        </div>
        <div className="quote">
          <p>
            "Intellectual <span>growth</span> should commence at <br></br> birth
            and ease only at death"
          </p>
        </div>
      </div>

      <div className="scroll-down">
        <h4>
          Track your <span>progress</span> with ease
        </h4>
        <p>
          With our easy and user-friendly tools, <br></br>you can track your self-improvement<br></br>on every step of the way.
        </p>
        <img src={macbook}></img>
      </div>
    </div>
  );
}

export default HomePage;
