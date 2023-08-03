import React from "react";
import equipImg from "../assets/icons/equipment.png";
import targetImg from "../assets/icons/target.png";
import bodyPartImg from "../assets/icons/body-part.png";
import "../index.css";
const Detail = ({ exerciceDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciceDetail;
  const details = [
    {
      icon: bodyPartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipImg,
      name: equipment,
    },
  ];
  return (
    <div
      className="d-lg-flex container"
      style={{
        paddingTop: "60px",
      }}
    >
      <div className="lg-flex w-100 text-center">
        <img
          style={{ width: "100%", borderRadius: "50px" }}
          src={gifUrl}
          alt={name}
          loading="lazy"
        />
      </div>
      <div
        className="d-flex flex-column w-100 justify-content-between "
        style={{ paddingLeft: "40px", paddingTop: "30px" }}
      >
        {" "}
        <h1 className="text-center" style={{ textTransform: "capitalize" }}>
          {name}
        </h1>
        <p className="text-start" style={{ fontSize: "18px" }}>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </p>
        {details.map((item) => (
          <div
            style={{ textTransform: "capitalize", marginBottom: "20px" }}
            className="d-flex justify-content-start align-items-center"
          >
            <button className="btn-detail d-flex justify-content-center align-items-center">
              <img style={{ width: "100%" }} src={item.icon} alt="" />
            </button>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
