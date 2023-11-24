import {SearchBar} from "./Components/SearchBar/SearchBar"
import CurrentSong from "./Components/CurrentSong/currentSong"
import { useState } from "react"
import { testSong } from "./Components/Results/results"
import { useEffect } from "react"

const client_id = "1e7fb62cc8914cbf963fe98599e371f1"
const client_secret = "9cfa0c5d787f43059fa1e5ab235de187"
const tokenEndpoint =  "https://accounts.spotify.com/api/token"

export default function App(){

  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {

    const params = {
    method: "POST",
    headers: {
    'Content-type': 'application/x-www-form-urlencoded'
    },
    body: "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret
  }

  async function getAccessToken() {
    const response = await fetch(tokenEndpoint, params)
    const jsonResponse = await response.json()
    setAccessToken(jsonResponse.access_token)
}

getAccessToken();
    
}, [])

  return (
    <div>
      <h1></h1>
      <SearchBar />
      <br></br>
      <CurrentSong />
    </div>
  )
}