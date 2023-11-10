import React, { useState } from "react";
import Results from "../Results/results";
import filterBooks from "./searchFunctions";
import { songs } from "../../songData/songData";


export function SearchBar() {

    const [text, setText] = useState([""])

    const [searchResults, setSearchResults] = useState([
        /*{
            title: "Title",
            artists: ["Artists",],
            album: "Album"
        }*/
])

    function handleChange({target}){
        setText(target.value)
        const songObjects = filterBooks(text, songs)
        setSearchResults(songObjects)

    }


    return (
        <>
          <label htmlFor="songSearch">Search</label>
          <input name="songSearch" type="text" id="songSearch" value={text} onChange={handleChange}></input>
          <h1>Results:</h1>
          <div>
            <Results results={searchResults}/>
          </div>
        </>
    )
}