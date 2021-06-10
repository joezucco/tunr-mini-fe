import React from "react";
import { IoMdRemoveCircleOutline } from 'react-icons/io'

const FavoriteSongs = (props) => {
  //deconstruct songs from props
  const { favoriteSongs, rmFav } = props;
  console.log('this is favoriteSongs', favoriteSongs)
  const loaded = () => (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Favorite Songs</h1>
        {favoriteSongs.map((song, index) => (
          <article key={song._id}>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Time: {song.time}</p>
            <button><IoMdRemoveCircleOutline onClick={() => rmFav(index)}/></button>
          </article>
        ))}
      </div>
      <br></br>
    </>
  );

  const loading = () => <h1>No favorites yet.</h1>;

  return favoriteSongs.length > 0 ? loaded() : loading();
};

export default FavoriteSongs;
