import { useState} from "react";

export default function CurrentSong() {

    const [currentSong, setCurrentSong] = useState(null)

    return (
        <>
          <audio controls>
            <source/>
          </audio>
        </>
    )
}