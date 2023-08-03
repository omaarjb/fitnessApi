import React from "react";
import ExCategories from "./ExCategories";
import Loader from "./Loader";
const SimilarExercices = ({ simillarExercices, equipmentExercices }) => {
  return (
    <div className="container">
      <div>
        {" "}
        <h1 className="mt-5 text-center">Simillar Exercices</h1>
        {simillarExercices.length ? (
          <ExCategories data={simillarExercices} />
        ) : (
          <Loader />
        )}
      </div>
      <div>
        <h1 className="text-center container">
          Exercices With Same Equipments
        </h1>
        {equipmentExercices.length ? (
          <ExCategories data={equipmentExercices} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercices;
