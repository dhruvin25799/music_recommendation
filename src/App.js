import "./styles.css";
import React, { useState } from "react";

const musicDB = {
  Pop: [
    { name: "Industry Baby", artist: "Lil Nas X", rating: "5/5" },
    { name: "Need to Know", artist: "Doja Cat", rating: "4/5" }
  ],
  Rap: [
    { name: "Lose Yourself", artist: "Eminem", rating: "5/5" },
    { name: "Crown", artist: "Neffex", rating: "3/5" }
  ],
  Electronic: [
    { name: "Animals", artist: "Martin Garrix", rating: "3/5" },
    { name: "Levels", artist: "Avicii", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Pop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Music Recommendation</h1>
      <h2>Here are some music recommendations by me!</h2>
      <div>
        {Object.keys(musicDB).map(function (genre) {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem 0.3rem",
                borderRadius: "0.5rem",
                cursor: "pointer"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul style={{ textAlign: "left" }}>
          {musicDB[selectedGenre].map(function (song) {
            return (
              <li
                style={{
                  border: "1px solid grey",
                  padding: "0.5rem",
                  width: "20%",
                  listStyle: "none",
                  borderRadius: "0.5rem"
                }}
                key={song.name}
              >
                <div style={{ fontWeight: "bold" }}>
                  {song.name} by {song.artist}
                </div>
                <div style={{ fontSize: "smaller" }}>{song.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
