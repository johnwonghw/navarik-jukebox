import React from 'react';
import PlaybackBar from 'components/playback-bar';
import SongTile from 'components/song-tile';
import './_app.scss';
import { useAudio, useSongManager } from 'hooks'

function App() {

  const [songList, currentSong, setSongId] = useSongManager("https://run.mocky.io/v3/641612cc-06bb-4292-852b-10b20b178b96");
  const [audioElement, audioState, audioControls] = useAudio({ src: currentSong ? currentSong.mediaUrl : null });

  return (
    <div className="app-container">
      <div className="song-list-container">
        {songList.map((song) => {
          return (
            <SongTile
              imgUrl={song.imgUrl}
              title={song.title}
              artist={song.artist}
              onClick={() => setSongId(song.id)}
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
