import React from "react";
import { AiFillDelete, AiFillHeart } from 'react-icons/ai';
import { BiLoader } from "react-icons/bi";

const FavoriteSongs = (props) => {
  //deconstruct songs from props
  const { songs, favSong } = props;

  const loaded = () => (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>My Songs</h1>
        {songs.map((song) => (
          <article key={song._id}>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Time: {song.time}</p>
            <button>
              <AiFillDelete
                onClick={() => {
                  props.deleteSong(song);
                }}
              />
            </button>
            <button onClick={() => favSong(song)}>
              <AiFillHeart />
            </button>
          </article>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );

  const loading = () => <h1>Loading songs...<BiLoader /></h1>;

  return songs.length > 0 ? loaded() : loading();
};

export default FavoriteSongs;
