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
                <h2>{result.name}:{' by '}
                {result.artists.map((artist) => {return artist.name + ' '})} 
                from {result.album.album_type}
                </h2>
                <button onClick={() => 
                    {
                        setPlaylist([...playlist, {title: result.name, artists: result.artists.map((artist) => {return artist.name}), album: result.album.album_type, uri: result.uri}])
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