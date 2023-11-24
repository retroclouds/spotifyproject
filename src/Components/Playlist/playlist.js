import { useState } from "react"

export default function Playlist (props) {

    const [playlistName, setPlaylistName] = useState("Playlist Name")

    function handleChange ({target}) {
        setPlaylistName(target.value)
    }

    return (

        <>
          <h1>{playlistName}</h1>
          <input value={playlistName} type="text" id="playlistName" onChange={handleChange}/>
          {props.playlist.map((song, key) => (
            <>
              <h2>{song.title}: {song.artists.join(" ")} from {song.album}</h2>
              <button 
              onClick={() => {props.removeSong(song.title); 
                props.removeUri(song.spotifyUri)}
              }>
                -
                </button>
            </>
          ))}
          <br></br>
          <br></br>
          <h1>{props.uris}</h1>
          <button>Save</button>
        </>
    )
}