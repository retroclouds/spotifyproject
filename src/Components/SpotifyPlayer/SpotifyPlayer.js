import { useState} from "react";
import { useEffect } from "react";

export default function SpotifyPlayer({ accessToken, trackUri }) {
  console.log(accessToken);

  const [currentSong, setCurrentSong] = useState(null);

  /*
  const sdkScript = document.createElement("script")
  sdkScript.src = "https://sdk.scdn.co/spotify-player.js"
  sdkScript.defer = true

  document.body.appendChild(sdkScript)
  */

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = accessToken;
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });
    }

    // Rest of your player setup code...

    player.connect();

    // Clean up the player when the component is unmounted
    return () => {
      player.disconnect();
    };
  }, [accessToken]);

  return (
    <>
      {/* Your component JSX */}
    </>
  );
}
