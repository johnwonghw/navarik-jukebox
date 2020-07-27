import React from 'react';
import './_song-tile.scss';

export default function SongTile({url, title, artist}) {
    return (
        <div className="song-tile-container">
            <div className="square"><img className="song-image" src={url} /></div>
            <div className="song-info">
                <div className="title">{title}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    );
}