import {SearchBar} from "./Components/SearchBar/SearchBar"
import CurrentSong from "./Components/CurrentSong/currentSong"
import { useState } from "react"
import { testSong } from "./Components/Results/results"
import { useEffect } from "react"

const client_id = "1e7fb62cc8914cbf963fe98599e371f1"
const client_secret = "9cfa0c5d787f43059fa1e5ab235de187"
const tokenEndpoint =  "https://accounts.spotify.com/api/token"

const authEndpoint = "https://accounts.spotify.com/authorize"

const responseType = "token"
const redirectUri = "http://localhost:3000"
const scope = "playlist-modify-public playlist-modify-private user-read-private user-read-email"

const authUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scope}
                &response_type=${responseType}`

export default function App(){

  const [accessToken, setAccessToken] = useState("")
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    if(hash) {
      setAccessToken(hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1])
    }
  }, [])


  const userEndpoint = "https://api.spotify.com/v1/me"
  const userParams = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + accessToken
    }
  }

  async function getUserId() {
    const response = await fetch(userEndpoint, userParams)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    setUserId(jsonResponse.id)
  }
  getUserId()

  /*
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
  */

  return (
    <div>
      <a href={authUrl}>Login</a>
      <h1></h1>
      <SearchBar accessToken={accessToken} userId={userId}/>
      <br></br>
      <CurrentSong />
    </div>
  )
}