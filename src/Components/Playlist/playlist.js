export default function Playlist (props) {
    return (
        <>
          <h1>Playlist:</h1>
          {props.playlist.map((song, key) => (
            <>
              <h2>{song.title}: {song.artists.join(" ")} from {song.album}</h2>
              <button onClick={() => props.removeSong(song.title)}>-</button>
            </>
          ))}
        </>
    )
}