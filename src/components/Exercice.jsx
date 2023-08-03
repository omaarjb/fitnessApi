import React from "react";
import { useState } from "react";
import { options, fetchData } from "../api/fetchData";
import { Link } from "react-router-dom";
import "../index.css";
import { Pagination, Stack } from "@mui/material";
import { useEffect } from "react";
import ExerciceCard from "./ExerciceCard";

const Exercice = ({ exercices, setExercices, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercicesPerPage = 9;
  const indexOfLastExercice = currentPage * exercicesPerPage;
  const indexOfFirstExercice = indexOfLastExercice - exercicesPerPage;
  const currentExercices = exercices.slice(
    indexOfFirstExercice,
    indexOfLastExercice
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercicesData = async () => {
      let excercicesData = [];
      if (bodyPart === "all") {
        excercicesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      } else {
        excercicesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercices(excercicesData);
    };
    fetchExercicesData();
  }, [bodyPart]);

  return (
    <div className="container ">
      <h1 className="text-center">Results</h1>

      <div className="row ">
        {currentExercices.map((exercice, index) => (
          <ExerciceCard key={index} exercice={exercice} />
        ))}
      </div>

      <Stack mt="100px" alignItems="center">
        {exercices.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercices.length / exercicesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </div>
  );
};

export default Exercice;
