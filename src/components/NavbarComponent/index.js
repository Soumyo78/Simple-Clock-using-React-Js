import { NavLink } from "react-router-dom";
import "./style.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar-main-container">
      <NavLink to={"/"} exact activeStyle={{ color: "white" }}>
        Home
      </NavLink>
      <NavLink to={"/clock"} exact activeStyle={{ color: "white" }}>
        Clock
      </NavLink>
      <NavLink to={"/stopwatch"} exact activeStyle={{ color: "white" }}>
        Stopwatch
      </NavLink>
      <NavLink to={"/timer"} exact activeStyle={{ color: "white" }}>
        Timer
      </NavLink>
      <NavLink to={"/about"} exact activeStyle={{ color: "white" }}>
        About
      </NavLink>
    </nav>
  );
};

export default NavbarComponent;
