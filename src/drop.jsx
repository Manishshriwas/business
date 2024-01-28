import React, { useState, useEffect } from 'react';
import './drop.css';

const WordDrop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []); 

  return (
    <div className={`word-drop ${isVisible ? 'visible' : ''}`}>
      <span>Your Word</span>
    </div>
  );
};

export default WordDrop;
