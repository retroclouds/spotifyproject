import React, { useEffect, useState } from "react";
import Results from "../Results/results";
import Playlist from "../Playlist/playlist";
import filterBooks from "./searchFunctions";
import { songs } from "../../songData/songData";
import styles from '../../style.module.css'

export function SearchBar(props) {

    const [text, setText] = useState("")
    const [searchResults, setSearchResults] = useState([
        /*{
            title: "Title",
            artists: ["Artists",],
            album: "Album"
        }*/
    ])
    const [playlist, setPlaylist] = useState([])

    function handleChange({target}){
        setText(target.value)
    }

    function removeSong(songTitleToRemove){
        setPlaylist(playlist.filter(
            (song) => song.title !== songTitleToRemove
          ))
    }

    useEffect(() => {
        if(text){
            const searchEndpoint = `https://api.spotify.com/v1/search?q=${text}&type=track&limit=5`

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
                try {
                    console.log(jsonResponse.tracks.items)
                    setSearchResults(jsonResponse.tracks.items)
                }
                catch(error) {
                    console.error(error.message)
                }
    
            }
            getTrack();            
        }   
    }, [text])

    const getUserEndpoint = "https://api.spotify.com/v1/me"
    const getUserParams = {
    method: "GET",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + props.accessToken
      }
    }
  
    async function getUser(){
      const response = await fetch(getUserEndpoint, getUserParams)
      const jsonResponse = await response.json()
      console.log(jsonResponse)
    }

    return (
        <>
          <br></br>
          <input className={styles.search} placeholder="Search" name="songSearch" type="text" 
          id="songSearch" value={text} onChange={handleChange}></input>
          <div className={styles.wrapper}>
            <Results results={searchResults} playlist={playlist} setPlaylist={setPlaylist}/>
            <Playlist playlist={playlist} removeSong={removeSong} accessToken={props.accessToken} 
            userId={props.userId}/>
          </div>
        </>
    )
}