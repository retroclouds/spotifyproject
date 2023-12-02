import React, { useEffect, useState } from "react";
import Results from "../Results/results";
import filterBooks from "./searchFunctions";
import { songs } from "../../songData/songData";

export function SearchBar(props) {

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
    }

    useEffect(() => {
        if(!text) {
            return setSearchResults([])
        }

        const searchEndpoint = `https://api.spotify.com/v1/search?q=${text}&type=track&limit=10`

        const searchParams = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + props.accessToken
            }
        }
          
        async function getTrack(){
            const response = await fetch(searchEndpoint, searchParams)
            const jsonResponse = await response.json()
            console.log(jsonResponse.tracks.items)
            setSearchResults(jsonResponse.tracks.items)

        }
    
        getTrack();
            //const songObjects = filterBooks(text, songs)
            //setSearchResults(songObjects)        

    }, [text])


    return (
        <>
          <label htmlFor="songSearch">Search</label>
          <input name="songSearch" type="text" id="songSearch" value={text} onChange={handleChange}></input>
          <h1>Results:</h1>
          <div>
            <Results results={searchResults}/>
            <h1>{props.accessToken}</h1>
          </div>
        </>
    )
}