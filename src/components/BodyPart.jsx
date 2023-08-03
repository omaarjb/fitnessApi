import React from "react";
import gym_icon from "../assets/icons/gym-icon.jpg";
import { type } from "@testing-library/user-event/dist/type";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      className="body_parts"
      type="button"
      style={{
        width: "260px",
        padding: "30px",
        borderBottom:
          bodyPart === item ? "4px solid rgb(80, 166, 206)" : "none",
        backgroundColor: bodyPart === item ? "#C4C0C0" : "rgb(221, 218, 218)",
        borderRadius: "30px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
      }}
    >
      <div class="card-body " className="text-center ">
        <img
          src={gym_icon}
          alt=""
          style={{ width: "80px", marginBottom: "35px" }}
        />
        <h5 class="card-title">{item}</h5>
      </div>
    </div>
  );
};

export default BodyPart;
