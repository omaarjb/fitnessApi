import React from "react";
import { Link } from "react-router-dom";

const ExerciceCard = ({ exercice }) => {
  return (
    <div className=" col text-center g-5">
      <div className="exercice-card" style={{ position: "relative" }}>
        <Link to={`/exercice/${exercice.id}`}>
          <img src={exercice.gifUrl} alt={exercice.name} loading="lazy" />
          <button
            type="button"
            class="btn btn-info"
            style={{
              position: "absolute",
              bottom: "70px",
              left: "10px",
              textTransform: "capitalize",
            }}
          >
            {exercice.bodyPart}
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style={{
              position: "absolute",
              bottom: "70px",
              right: "10px",
              textTransform: "capitalize",
            }}
          >
            {exercice.target}
          </button>
          <p
            style={{
              position: "absolute",

              bottom: "5px",
              color: "white",
              fontSize: "18px",
              fontWeight: "400",
              backgroundColor: "gray",
              width: "100%",
              textTransform: "capitalize",
              borderRadius: "10px",
            }}
          >
            {exercice.name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ExerciceCard;
