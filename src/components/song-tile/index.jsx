import React from 'react';
import './_song-tile.scss';

export default function SongTile({ imgUrl, title, artist, onClick }) {
    return (
        <div className="song-tile-container" onClick={onClick} >
            <img className="song-image" src={imgUrl} alt={`Song art for ${artist} - ${title}`} />
            <div className="song-info">
                <div className="title">{title}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    );
}