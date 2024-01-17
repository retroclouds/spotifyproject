import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"

export default function Playlist (props) {

    const [playlistName, setPlaylistName] = useState("Playlist Name?")
    const [playlistId, setPlaylistId] = useState("")
    const [playlistDescript, setPlaylistDescript] = useState("Playlist Description?")

    function handleChange ({target}) {
        setPlaylistName(target.value)
    }

    function handleDescriptChange({target}){
      setPlaylistDescript(target.value)
    }

    const createPlaylistEndpoint = `https://api.spotify.com/v1/users/${props.userId}/playlists`
    const params = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "authorization": "Bearer " + props.accessToken
      },
      body: JSON.stringify({
        name: playlistName,
        description: "New playlist description",
        public: false,
        })
    }

    async function createPlaylist() {
      const response = await fetch(createPlaylistEndpoint, params)
      const jsonResponse = await response.json()
      setPlaylistId(jsonResponse.id)
      console.log(playlistId)
    }

    const addSongsEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
    const addSongParams = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "authorization": "Bearer " + props.accessToken
      },
      body: JSON.stringify({
        uris: props.playlist.map(song => song.uri),
        position: 0
      })
    }

    async function addSongs() {
      try{
        const response = await fetch(addSongsEndpoint, addSongParams)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
      }
      catch(error){
        alert("There was an issue saving your playlist, Please press the save button again")
      }
    }
    return (

        <>
          <h1>Playlist:</h1>
          <input value={playlistName} type="text" id="playlistName" onChange={handleChange}/>
          <br></br>
          <br></br>
          <input value={playlistDescript} type="text" id="playlistDescription" 
          onChange={handleDescriptChange}/>
          {props.playlist.map((song, key) => (
            <>
              <h2>{song.title}:{' by'} {song.artists.join(" ")} from {song.album}</h2>
              <button 
              onClick={() => {
                props.removeSong(song.title); 
                }
              }>
                -
                </button>
            </>
          ))}
          <br></br>
          {/*<button onClick={() => {for(let i = 0; i < props.playlist.length; i++) {
            console.log(props.playlist[i].uri)
          }}}>Click</button>*/}
          <br></br>
          <button onClick={() => {
            try {
              createPlaylist(); addSongs();
            }
            catch(error){
              console.error(error.message)
              window.alert("Network Error, Please try again")
            }
          }
          }
          >Save To Spotify</button>
        </>
    )
}