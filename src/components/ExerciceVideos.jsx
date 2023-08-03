import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import "../index.css";
const ExerciceVideos = ({ exerciceVideos, name }) => {
  console.log(exerciceVideos);
  if (!exerciceVideos.length) return "Loading...";
  return (
    <div className="container" style={{ marginTop: "200px" }}>
      <h1 className="text-center mb-5">
        Watch{" "}
        <span style={{ textTransform: "capitalize", color: "red" }}>
          {name}
        </span>{" "}
        exercice videos
      </h1>
      <div className="row">
        {exerciceVideos.slice(0, 6).map((item, index) => (
          <div className="ex-video col-lg text-center g-4">
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ width: "400px", borderRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
            </a>
            <h5>{item.video.title}</h5>
            <p
              style={{
                color: "rgb(80, 166, 206)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item.video.channelName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciceVideos;
