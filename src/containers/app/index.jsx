import React, { useState } from 'react';
import NavBar from 'components/nav-bar';
import PlaybackBar from 'components/playback-bar';
import SongTile from 'components/song-tile';
import './_app.scss';
import { useAudio } from 'hooks'

function App() {

  let mockSongList = [
    {
      id: "1",
      artist: "Lawrence 1",
      title: "Jazzy Piano",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/thejazzpiano.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "3",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "4",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "5",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "6",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      imgUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
  ]

  const [currentSong, setCurrentSong] = useState({})
  const [audioElement, audioState, audioControls] = useAudio({ src: currentSong ? currentSong.mediaUrl : null });
  console.log({ currentSong })
  return (
    <div className="app-container">
      <NavBar />
      <div className="song-list-container">
        {mockSongList.map((song) => {
          return (
            <SongTile
              imgUrl={song.imgUrl}
              title={song.title}
              artist={song.artist}
              onClick={() => {
                setCurrentSong(song)
              }}
              key={`song-tile-${song.id}`}
            />
          )
        })}
      </div>
      <PlaybackBar
        play={audioControls.play}
        pause={audioControls.pause}
        seek={audioControls.seek}
        setVolume={audioControls.setVolume}
        currentSong={currentSong}
        isPlaying={audioState.isPlaying}
        volume={audioState.volume}
        currentTime={audioState.currentTime}
        totalTime={audioState.totalTime}
      />
      {audioElement}
    </div>
  );
}

export default App;
