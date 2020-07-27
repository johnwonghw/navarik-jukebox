import React from 'react';
import './_song-tile.scss';
import { MdAddCircle } from 'react-icons/md';

export default function SongTile({ url, title, artist }) {
    return (
        <div className="song-tile-container">
            <MdAddCircle className="add-queue-button" />
            <img className="song-image" src={url} />
            <div className="song-info">
                <div className="title">{title}</div>
                <div className="artist">{artist}</div>
            </div>
        </div>
    );
}