import React from 'react';
import PlaybackControls from './playback-controls';
import VolumeControls from './volume-controls';
import './_playback-bar.scss';

export default function PlaybackBar(props) {
    const {
        isPlaying,
        currentTime,
        totalTime,
        volume,
        play,
        pause,
        seek,
        next,
        previous,
        currentSong = { imgUrl: '', title: '', artist: '' },
        setVolume,
    } = props;

    return (
        <div className="playback-bar-container">
            <div className="song-info">
                {currentSong.imgUrl ? <img className="album-image" src={currentSong.imgUrl} alt={`Song art for ${currentSong.artist} - ${currentSong.title}`} /> : <div className="album-image blank" />}
                <div className="song-text">
                    <div className="title">{currentSong.title}</div>
                    <div className="artist">{currentSong.artist}</div>
                </div>
            </div>
            <PlaybackControls
                isPlaying={isPlaying}
                play={play}
                pause={pause}
                seek={seek}
                currentTime={currentTime}
                totalTime={totalTime}
                next={next}
                previous={previous}
            />
            <VolumeControls
                volume={volume}
                setVolume={setVolume}
            />
        </div>
    )
}