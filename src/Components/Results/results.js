import { useState } from "react"
import Playlist from "../Playlist/playlist"

export default function Results (props) {

    const [playlist, setPlaylist] = useState(
        [
            /*{
                title: "Title",
                artists: ["Artists"],
                album: "Album"
            }*/
    ]
    )

    function removeSong(songTitleToRemove){
        setPlaylist(playlist.filter(
            (song) => song.title !== songTitleToRemove
          ))
    }

    const testData = 
    [ { title: "hello", artists: ["hey"], album: "goodbye" } ] 

    return (
        <>
          {props.results.map((result, key) => (
              <>
                <h2>{result.title}: {result.artists.join(" ")} from {result.album}</h2>
                <button onClick={() => 
                    {
                        setPlaylist([...playlist, {title: result.title, artists: result.artists, album: result.album}])
                    }
                }>
                    +
                </button>
              </>
          ))}
          <Playlist playlist={playlist} removeSong={removeSong}/>
        </>
    )
}