import React from "react";
import icon from "../assets/icons/4729230.png";
import { Link } from "react-router-dom";
import "../index.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container ">
        <a class="navbar-brand" href="#">
          <img width={"65px"} src={icon} alt="" />
        </a>
        <div style={{ fontSize: "20px", fontWeight: "500" }}>OFC</div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="link" to={"/Home"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
