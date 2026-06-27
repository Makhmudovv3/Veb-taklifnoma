import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = ({ isPlaying, toggleMusic }) => {
  return (
    <button className="music-toggle" onClick={toggleMusic}>
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
};

export default MusicToggle;
