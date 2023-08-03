import React from "react";
import HomeImg from "../assets/images/home.jpg";
import "../index.css";
const Description = () => {
  return (
    <div className="container Description w-100">
      <div className="title1 text-center">
        <span>O</span>mar<span> F</span>itness<span> C</span>lub
      </div>

      <div className="d-lg-flex">
        <div className="w-100">
          <img className="homeImg img-fluid" src={HomeImg} alt="" />
        </div>
        <div className="introduction text-center  w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="title2">Renew , Refocus , Revive</h1>
          <p>Find out the most effective exercices just for you !</p>
          <button
            style={{ width: "50%" }}
            type="button"
            class="btn btn-secondary"
          >
            Check Exerices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
