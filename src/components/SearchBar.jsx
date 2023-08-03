import React, { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../api/fetchData";
import { options } from "../api/fetchData";
import ExCategories from "./ExCategories";

const SearchBar = ({ setExercices, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchExercicesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );

      setbodyParts(["all", ...bodyPartsData]);
    };

    fetchExercicesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciceData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );

      const findExercice = exerciceData.filter(
        (exercice) =>
          exercice.name.toLocaleLowerCase().includes(search) ||
          exercice.target.toLocaleLowerCase().includes(search) ||
          exercice.equipment.toLocaleLowerCase().includes(search) ||
          exercice.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch("");
      setExercices(findExercice);
    }
  };

  return (
    <div className="container SearchBar w-100 ">
      <h2 className="text-center">All those Exerices for you</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search for Exercice"
          aria-label="Search for Exercice"
          aria-describedby="button-addon2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="container">
        <ExCategories
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchBar;
