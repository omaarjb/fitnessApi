import React from "react";
import Exercice from "../components/Exercice";
import SearchBar from "../components/SearchBar";
import Description from "../components/Description";
import { useState } from "react";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercices, setExercices] = useState([]);
  console.log(bodyPart);
  return (
    <div>
      <Description />
      <SearchBar
        setExercices={setExercices}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercice
        exercices={exercices}
        setExercices={setExercices}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
