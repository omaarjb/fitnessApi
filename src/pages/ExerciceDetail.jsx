import React from "react";
import { fetchData, options } from "../api/fetchData";
import Detail from "../components/Detail";
import ExerciceVideos from "../components/ExerciceVideos";
import SimilarExercices from "../components/SimilarExercices";
import Footer from "../components/Footer";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { ytbOptions } from "../api/fetchData";
const ExerciceDetail = () => {
  const [exerciceDetail, setExerciceDetail] = useState({});
  const [exerciceVideos, setExerciceVideos] = useState([]);
  const [simillatExercices, setSimillarExercices] = useState([]);
  const [equipmentExercices, setEquipmentExercices] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercicesData = async () => {
      const exerciceUrl = "https://exercisedb.p.rapidapi.com";
      const ytbUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciceDetailData = await fetchData(
        `${exerciceUrl}/exercises/exercise/${id}`,
        options
      );
      setExerciceDetail(exerciceDetailData);

      const exerciceVideoData = await fetchData(
        `${ytbUrl}/search?query=${exerciceDetailData.name}`,
        ytbOptions
      );
      setExerciceVideos(exerciceVideoData.contents);

      const simillarExerciceData = await fetchData(
        `${exerciceUrl}/exercises/target/${exerciceDetailData.target}`,
        options
      );
      setSimillarExercices(simillarExerciceData);
      const equipmentExerciceData = await fetchData(
        `${exerciceUrl}/exercises/equipment/${exerciceDetailData.equipment}`,
        options
      );
      setEquipmentExercices(equipmentExerciceData);
    };
    fetchExercicesData();
  }, [id]);

  return (
    <div>
      <Detail exerciceDetail={exerciceDetail} />
      <ExerciceVideos
        exerciceVideos={exerciceVideos}
        name={exerciceDetail.name}
      />
      <SimilarExercices
        simillarExercices={simillatExercices}
        equipmentExercices={equipmentExercices}
      />
      <Footer />
    </div>
  );
};

export default ExerciceDetail;
