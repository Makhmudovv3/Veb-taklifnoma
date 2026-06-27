import React, { useState } from 'react';
import { Lock, LockOpen, Heart, Music, VolumeX } from 'lucide-react';

const EntryScreen = ({ isUnlocked, onUnlock, startMusic, toggleMusic, isPlaying, lang, setLang, t }) => {
  const [animating, setAnimating] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    if (animating || isUnlocked) return;
    setAnimating(true);
    
    if (startMusic) startMusic();
    
    setTimeout(() => {
      onUnlock();
    }, 800);

    setTimeout(() => {
      setHidden(true);
    }, 2300);
  };

  if (hidden) return null;

  return (
    <div className={`entry-screen ${isUnlocked ? 'fade-out' : ''}`}>
      <div className="door door-left"></div>
      <div className="door door-right"></div>
      <div className="entry-header" style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '30px 20px', display: 'flex', justifyContent: 'space-between', zIndex: 100 }}>
        <button className={`hero-music-btn ${!isPlaying ? 'paused' : ''}`} onClick={toggleMusic}>
          {isPlaying ? <Music size={18} color="#fff" strokeWidth={2} /> : <VolumeX size={18} color="#fff" strokeWidth={2} />}
        </button>
        <div className="hero-lang-toggle">
          <span className={`lang-option ${lang === 'RU' ? 'active' : ''}`} onClick={() => setLang('RU')}>RU</span>
          <span className={`lang-option ${lang === 'UZ' ? 'active' : ''}`} onClick={() => setLang('UZ')}>UZ</span>
        </div>
      </div>

      <div className="entry-content">
        <div className={`bounce-wrapper ${animating ? 'stop-bounce' : ''}`}>
          <div className="vertical-line"></div>
          <Heart size={20} fill="#fff" color="#fff" className="heart-icon" />
        </div>
        
        <h1 className="entry-title">
          {lang === 'UZ' ? (
            <>SIZGA<br/>TAKLIFNOMA<br/>KELDI</>
          ) : (
            <>ВАМ<br/>ПРИШЛО<br/>ПРИГЛАШЕНИЕ</>
          )}
        </h1>
        
        <div 
          className={`lock-circle ${animating ? 'unlocked' : ''}`} 
          onClick={handleClick}
        >
          {animating ? <LockOpen size={24} strokeWidth={1.5} /> : <Lock size={24} strokeWidth={1.5} />}
        </div>
        
        <p className="entry-subtitle">
          {lang === 'UZ' ? (
            <>Qulfchani bosib,<br/>taklifnomani oching</>
          ) : (
            <>Нажмите на замок,<br/>чтобы открыть приглашение</>
          )}
        </p>
      </div>
    </div>
  );
};

export default EntryScreen;
