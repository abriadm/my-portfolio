import { IoClose } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import profile from "../assets/profile-picture.jpg";
import { Link } from "react-router-dom";
import "./component.css";
import { useEffect, useState } from "react";
import { useLockBodyScroll } from "react-use";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const closeNav = (e) => {
      const sidebar = document.querySelector(".sidebar");
      const closeBtn = document.querySelector("#close-btn");
      const sideMenu = document.querySelector("#side-menu");

      if (
        !sidebar.contains(e.target) &&
        !closeBtn.contains(e.target) &&
        !sideMenu.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", closeNav);

    return () => document.removeEventListener("click", closeNav);
  }, []);

  useLockBodyScroll(isActive);

  return (
    <>
      <a id="side-menu" onClick={toggleNav}>
        <TiThMenuOutline />
      </a>
      <div className={`background-side ${isActive ? "active" : ""}`}></div>
      <nav className={`sidebar ${isActive ? "active" : ""}`}>
        <a id="close-btn" onClick={toggleNav}>
          <IoClose />
        </a>
        <Link to="/" className="side-icon" onClick={toggleNav}>
          <img src={profile} alt="Profile Picture" />
          <div className="side-content">
            <h1>Giveonaldo</h1>
            <h4>
              <span>21 years old</span>
            </h4>
          </div>
        </Link>
        <div className="main-side">
          <Link to="/project">Project</Link>
          <Link to="/education">Education</Link>
        </div>
        <hr />
        <div className="social-side">
          <a href="https://www.instagram.com/strzqper/" target="_blank">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="https://github.com/abriadm" target="_blank">
            <FaGithub /> <span>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/abriansyahadam/" target="_blank">
            <FaLinkedin /> <span>Linkedin</span>
          </a>
        </div>
        <footer>
          <h5>&copy; Giveonaldo, All Rights Reserved</h5>
        </footer>
      </nav>
    </>
  );
};

export default Sidebar;
