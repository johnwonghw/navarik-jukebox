import React from 'react';
import './_song-tile.scss';
import { MdAddCircle } from 'react-icons/md';

export default function SongTile({ imgUrl, title, artist, onClick }) {
    return (
        <div className="song-tile-container" onClick={onClick} >
            <MdAddCircle className="add-queue-button" />
            <img className="song-image" src={imgUrl} />
            <div className="song-info">
                <div className="title">{title}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    );
}