/*const currentIDs = []

function generateID () {
  let id = Math.floor(Math.random() * 1000)
  while (id in currentIDs) {
    id = Math.floor(Math.random() * 1000)
  }
  currentIDs.push(id)
  return id
}
*/

const songs = [
    {
        title: "Touring",
        artists: ["Slim", "Headie One"],
        album: "Still Working",
        /*ID: generateID(),*/
        spotifyUri: "31ta5gEtj5jNRPzP9Lutig"
    }, 
    {
        title: "Stay Inside",
        artists: ["Digga D"],
        album: "Stay Inside"
        /*ID: generateID()*/,
        spotifyUri: "0FGrsEkYbMixF240cAUCFX"
    },
    {
        title: "Toast Up",
        artists: ["Skeamer"],
        album: "Toast Up"
        /*ID: generateID()*/,
        spotifyUri: "1YFkTgCYXylx2XwnnUQwaZ"
    },

    {
        title: "NRF Freestyle",
        artists: ["Clavish"],
        album: "Rap Game Awful"
        /*ID: generateID()*/,
        spotifyUri: "6YQbGMhB7JIDaZKKoEJW3j"
    },

    {
        title: "Crease",
        artists: ["Confamm Charlito", "AO", "Skripteh", "Jah1", "Smilez"],
        album: "Crease"
        /*ID: generateID()*/,
          spotifyUri: "1giDBcG4DN06CbPIhScubh"
    }
]

export { songs }