import { useState } from "react"
import styles from '../../style.module.css'

const testData = [ { title: "hello", artists: ["hey"], album: "goodbye" } ] 
const testSong = { title: "hello", artists: ["hey"], album: "goodbye" }

export { testSong }

export default function Results (props) {

    /*
    const [playlist, setPlaylist] = useState(
        [
            
    ]
    )
    */

    return (
        <>
          <h1>Results:</h1>
          {props.results.map((result, key) => (
            <div className={styles.song}>
                <h2>{result.name}:{' by '}
                {result.artists.map((artist) => {return artist.name + ' '})} 
                from {result.album.album_type}
                </h2>
                <button onClick={() => 
                   {
                    props.setPlaylist
                        (
                            [
                                ...props.playlist,
                                {
                                    title: result.name, 
                                    artists: result.artists.map((artist) => {return artist.name}), 
                                    album: result.album.album_type, 
                                    uri: result.uri
                                }
                                
                            ]
                        )
                    }
                }>
                    +
                </button>
            </div>
          ))}
          <h1></h1>
        </>
    )
}