import React from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';

export default function PlaybackBar(props) {
    const {
        isPlaying,
        play,
        pause,
        currentTime,
        seek,
        totalTime
    } = props;

    const parseDisplayTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = ("0" + Math.floor(time) % 60).slice(-2);
        return `${minutes}:${seconds}`
    };

    return (
        <div className="playback-controls-container">
            <div className="playback-controls-buttons">
                {isPlaying
                    ? <MdPause className="control-button pause-button" onClick={() => pause()} />
                    : <MdPlayArrow className="control-button play-button" onClick={() => play()} />}
            </div>
            <div className="time-seeker-wrapper">
                <span className="time">{parseDisplayTime(currentTime)}</span>
                <input
                    className="time-seeker"
                    type="range"
                    min={0}
                    max={Math.floor(totalTime)}
                    value={Math.floor(currentTime)}
                    onChange={(e) => seek(e.target.value)}
                />
                <span className="time">{parseDisplayTime(totalTime)}</span>
            </div>
        </div>
    )
}