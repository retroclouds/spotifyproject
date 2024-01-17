import {SearchBar} from "./Components/SearchBar/SearchBar"
import CurrentSong from "./Components/SpotifyPlayer/SpotifyPlayer"
import { useState } from "react"
import { testSong } from "./Components/Results/results"
import { useEffect } from "react"
import styles from "./style.module.css"
import SpotifyPlayer from "./Components/SpotifyPlayer/SpotifyPlayer"

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
    document.body.style.backgroundColor = "rgb(42, 39, 39)"
    document.body.style.font = "16px 'Roboto', sans-serif"
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
      setAccessToken2(jsonResponse.access_token)
  }

  getAccessToken();
    
  }, [])
  */
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome To Jamming !</h1>
      <h1>1st Access token: {accessToken}</h1>
      <SearchBar accessToken={accessToken} userId={userId}/>
      <br></br>
      <a className={styles.login} href={authUrl}>Login</a>
      <SpotifyPlayer accessToken={accessToken}/>
    </div>
  )
}