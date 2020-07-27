import React from 'react';
import { MdVolumeMute, MdVolumeDown, MdVolumeUp } from 'react-icons/md';

export default function VolumeControls({ volume, setVolume }) {

    const getVolumeIcon = (volume) => {
        if (volume === 0) {
            return <MdVolumeMute className="volume-icon" />
        } else if (volume <= 0.5) {
            return <MdVolumeDown className="volume-icon" />
        } else {
            return <MdVolumeUp className="volume-icon" />
        }
    };

    return (
        <div className="volume-controls">
            {getVolumeIcon(volume)}
            <input
                type="range"
                min={0}
                max={1}
                value={volume}
                step={0.1}
                onChange={(e) => setVolume(e.target.value)}
            />
        </div>
    )
}