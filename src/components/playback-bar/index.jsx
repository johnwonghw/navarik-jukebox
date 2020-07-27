import React from 'react';
import PlaybackControls from './playback-controls';
import './_playback-bar.scss';

export default function PlaybackBar() {
    return (
        <div className="playback-bar-container">
            <div className="song-info">
                <img className="album-image" src="https://www.bensound.com/bensound-img/theelevatorbossanova.jpg" />
                <div className="song-text">
                    <div className="title">Happy Days</div>
                    <div className="artist">Bob Parker</div>
                </div>
            </div>
            <PlaybackControls />
        </div>
    )
}