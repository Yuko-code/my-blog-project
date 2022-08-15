import { NavLink } from "react-router-dom";
import "./navbar.css";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <NavLink to="/" exact className="header-nav__item">
            Yuko
          </NavLink>
          <NavLink to="/post" className="header-nav__item">
            Blog Posts
          </NavLink>
          <NavLink to="/project" className="header-nav__item">
            Projects
          </NavLink>
          <NavLink to="/about" className="header-nav__item">
            About
          </NavLink>
        </nav>
        <div>
          <SocialIcon
            url=""
            className=""
            target="_blank"
            fgColor="#fff"
          ></SocialIcon>
          <SocialIcon
            url=""
            className=""
            target="_blank"
            fgColor="#fff"
          ></SocialIcon>
          <SocialIcon
            url=""
            className=""
            target="_blank"
            fgColor="#fff"
          ></SocialIcon>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
