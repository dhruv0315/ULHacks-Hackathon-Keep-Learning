import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
            <li className={classes.logo}>Keep <span>Learning</span></li>
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience-tracker">Experience Tracker</Link>
          </li>
          <li>
            <Link to="/goal-setting">Goal Setting</Link>
          </li>
          <li>
            <Link to="/be-inspired">Be Inspired</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
