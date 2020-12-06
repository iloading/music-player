import React, { useState, useRef, useEffect } from "react";
//Styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
//Import Music
import musicAPI from "./util";

function App() {
  //References
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(musicAPI());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animation: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calcular Percentagem para animação

    const animationPercentage = (current / duration) * 100;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animation: animationPercentage,
    });
  };

  useEffect(() => {
    //Active state
    const newSongs = songs.map((item) => {
      if (item.id === currentSong.id) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setSongs(newSongs);

    //check if song is playing
    if (isPlaying) audioRef.current.play();
  }, [currentSong]);

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onLoad={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
