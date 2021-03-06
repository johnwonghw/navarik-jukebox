import React, { useState, useEffect, useRef } from 'react';

/* Loads audio and provides controls and audio state */
const useAudio = ({ src, onEnded }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioState = { currentTime, totalTime, isPlaying, volume };
    const ref = useRef(null);

    const audioElement = <audio
        src={src}
        controls={false}
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={onEnded}
        onVolumeChange={() => {
            const el = ref.current;
            if (!el) return;
            setVolume(el.volume)
        }}
        onDurationChange={() => {
            const el = ref.current;
            if (!el) return;
            setTotalTime(el.duration);
        }}
        onTimeUpdate={() => {
            const el = ref.current;
            if (!el) return;
            setCurrentTime(el.currentTime)
        }}
    />

    const audioControls = {
        play: () => {
            const el = ref.current;
            if (!el) return;
            el.play();
        },
        pause: () => {
            const el = ref.current;
            if (!el) return;
            el.pause();
        },
        seek: time => {
            const el = ref.current;
            if (!el || audioState.totalTime === undefined) return;
            time = Math.min(audioState.totalTime, Math.max(0, time));
            console.log(time)
            el.currentTime = time || 0;
        },
        setVolume: (volume) => {
            const el = ref.current;
            if (!el) { return undefined; }
            el.volume = volume;
        }
    };

    useEffect(() => {
        if (src) {
            audioControls.play();
        }
    }, [src]);

    return [audioElement, audioState, audioControls];
};

/* Fetches songs and manages whats being played. */
const useSongManager = (url) => {
    const [songList, setSongList] = useState([]);
    const [songId, setSongId] = useState(null);

    useEffect(() => {
        const fetchSongList = async () => {
            const songsResponse = await fetch(url);
            const songsJson = await songsResponse.json();

            // Save previous list of songs with new list if url changes.
            // TODO: Remove potential duplicates.
            setSongList((prevSongList) => [...prevSongList, ...songsJson.songs]);
        }
        fetchSongList();
    }, [url]);

    const currentSong = songList.find((song) => song.id === songId);

    return [songList, currentSong, setSongId];
}

export { useAudio, useSongManager };