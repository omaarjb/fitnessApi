import React, { useEffect } from "react";
import BodyPart from "./BodyPart";
import "../index.css";
import next_arrow from "../assets/icons/next.png";
import back_arrow from "../assets/icons/back.png";
import ExerciceCard from "./ExerciceCard";
const ExCategories = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  useEffect(() => {
    let scrollContainer = document.querySelector(".cont");
    let backArrow = document.querySelector(".back-arrow");
    let nextArrow = document.querySelector(".next-arrow");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });

    nextArrow.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 400;
    });

    backArrow.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 400;
    });
  });
  return (
    <div className="horizScroll">
      <div>
        <img
          style={{ width: "111px" }}
          src={back_arrow}
          alt=""
          className="back-arrow"
        />
      </div>
      <div className="cont">
        {data.map((item) => (
          <div
            className="cardd"
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciceCard exercice={item} />
            )}
          </div>
        ))}
      </div>
      <div>
        <img
          style={{ width: "65px" }}
          src={next_arrow}
          alt=""
          className="next-arrow"
        />
      </div>
    </div>
  );
};

export default ExCategories;
