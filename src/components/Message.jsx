import React, { useEffect, useRef } from 'react';

const Message = ({ t }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="message-section light-section">
      <div className="container reveal" ref={revealRef}>
        <h2 style={{ textTransform: 'none', whiteSpace: 'pre-line' }}>{t.title}</h2>
        <p>{t.p1}</p>
        <br/>
        <p>{t.p2}</p>
        <br/>
        <p className="bold-text">{t.p3}</p>
      </div>
    </section>
  );
};

export default Message;
