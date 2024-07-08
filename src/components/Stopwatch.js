import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);

  const startStop = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="timer">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={startStop} className={`control-button ${isActive ? 'stop' : 'start'}`}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset} className="control-button reset">Reset</button>
      </div>
      <div className="additional-controls">
        <button className="additional-button">Settings and sounds</button>
        <button className="additional-button">Show shortcuts</button>
      </div>
    </div>
  );
}

export default Stopwatch;
