import "./App.css";
import React, { useState, useEffect } from "react";
import FavoriteSongs from "./FavoriteSongs";
import AddSong from "./AddSong";
import SongList from "./SongList";

function App() {
  const url = "https://xnlkc7qh5m.execute-api.us-east-1.amazonaws.com/dev";

  const emptySong = {
    title: "",
    artist: "",
    time: "",
    favorite: false,
  };

  const [songs, setSongs] = useState([emptySong]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  // getSongs function
  const getSongs = () => {
    
    fetch(url + "/songs/")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.body)
        console.log(data.body)
      });
    
  };

  // when screen loads, get list of all songs
  useEffect(() => {
    getSongs();
  }, []);

  // handleCreate - function for when create is submitted
  const handleCreate = (newSong) => {
    fetch(url + "/songs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newSong),
    }).then(() => getSongs());
  };

  // deleteSong - function for deleting a song
  const deleteSong = (song) => {
    fetch(url + "/songs/" + song.SongId, {
      method: "delete"
    })
    .then(() => getSongs())
  }

  // favSong - function for favoriting a song
  const favSong = (name) => {
    setFavoriteSongs([...favoriteSongs, name])
  }

  // remove favorite - delete a track from favs list
  const rmFav = (index) => {
    console.log("running rm");
    setFavoriteSongs(favoriteSongs.filter((song, i) => i !== index)
    );
  }

  return (
    <div className="App">
      <h1>TUNR</h1>
      <SongList
        songs={songs}
        setFavoriteSongs={setFavoriteSongs}
        deleteSong={deleteSong}
        favSong={favSong}
      />
      <FavoriteSongs favoriteSongs={favoriteSongs} rmFav={rmFav}/>

      <AddSong song={emptySong} label="Add" handleSubmit={handleCreate} />
    </div>
  );
}

export default App;
