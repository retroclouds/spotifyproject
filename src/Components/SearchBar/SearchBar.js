import React, { useState } from "react"
import Results from "../Results/results"


const songs = [
    {
        title: "Touring",
        artists: ["Slim", "Headie One"],
        album: "Still Working"
    }, 
    {
        title: "Stay Inside",
        artists: ["Digga D"],
        album: "Stay Inside"
    },
    {
        title: "Toast Up",
        artists: ["Skeamer"],
        album: "Toast Up"
    },

    {
        title: "NRF Freestyle",
        artists: ["Clavish"],
        album: "Rap Game Awful"
    },

    {
        title: "Crease",
        artists: ["Confamm Charlito", "AO", "Skripteh", "Jah1", "Smilez"],
        album: "Crease"
    }
]





export function SearchBar() {

    const [text, setText] = useState("")

    function handleChange({target}){
        setText(target.value)
    }


    return (
        <>
          <label htmlFor="songSearch">Search</label>
          <input name="songSearch" type="text" id="songSearch" value={text} onChange={handleChange}></input>
          <h1>{text}</h1>
          {songs.map((song, key) => (
            <h2>{song.title}: {song.artists.join(" ")} from {song.album}</h2>
          ))}
          <div>
            <Results />
          </div>
        </>
        
    )
}