import React from 'react';
import { MdPlayArrow, MdPause, MdShuffle, MdRepeat, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function PlaybackBar({ isPlaying }) {
    return (
        <div className="playback-controls-container">
            <div className="playback-controls-buttons">
                <MdShuffle className="control-button" />
                <MdKeyboardArrowLeft className="control-button" />
                {isPlaying ? <MdPause className="control-button pause-button" /> : <MdPlayArrow className="control-button play-button" />}
                <MdKeyboardArrowRight className="control-button" />
                <MdRepeat className="control-button" />
            </div>
            <div className="time-seeker-wrapper">
                <span className="time">00:00</span>
                <input className="time-seeker" type="range" />
                <span className="time">23:28</span>
            </div>
        </div>
    )
}