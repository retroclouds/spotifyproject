import { useState } from "react"
import Playlist from "../Playlist/playlist"

const testData = [ { title: "hello", artists: ["hey"], album: "goodbye" } ] 
const testSong = { title: "hello", artists: ["hey"], album: "goodbye" }

export { testSong }

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

    const [playlistUris, setPlaylistUris] = useState([])

    function removeSong(songTitleToRemove){
        setPlaylist(playlist.filter(
            (song) => song.title !== songTitleToRemove
          ))
    }

    function removeUri(uriToRemove){
        setPlaylistUris(playlistUris.filter(
            (uri) => uri !== uriToRemove
        ))
    }

    return (
        <>
          {props.results.map((result, key) => (
              <>
                <h2>{result.title}: {result.artists.join(" ")} from {result.album}</h2>
                <button onClick={() => 
                    {
                        setPlaylist([...playlist, {title: result.title, artists: result.artists, album: result.album}])
                        setPlaylistUris([...playlistUris, result.spotifyUri])
                    }
                }>
                    +
                </button>
              </>
          ))}
          <Playlist playlist={playlist} removeSong={removeSong} uris={playlistUris} removeUri={removeUri}/>
        </>
    )
}