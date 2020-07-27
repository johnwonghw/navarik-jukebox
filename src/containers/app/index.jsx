import React from 'react';
import NavBar from 'components/nav-bar';
import PlaybackBar from 'components/playback-bar';
import SongTile from 'components/song-tile';
import './_app.scss';

function App() {

  let mockData = [
    {
      id: "1",
      artist: "Lawrence 1",
      title: "Jazzy Piano",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",
      artUrl: "https://www.bensound.com/bensound-img/thejazzpiano.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      artUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      artUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      artUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      artUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
    {
      id: "2",
      artist: "Lawrence 2",
      title: "The Elevator Bossa Nova",
      mediaUrl: "https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3",
      artUrl: "https://www.bensound.com/bensound-img/theelevatorbossanova.jpg"
    },
  ]

  return (
    <div className="app-container">
      <NavBar />
      <div className="song-list-container">
        {mockData.map(song => {
          return (
            <SongTile url={song.artUrl} title={song.title} artist={song.artist} />
          )
        })}
      </div>
      <PlaybackBar />
    </div>
  );
}

export default App;
