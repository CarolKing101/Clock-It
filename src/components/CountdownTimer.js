import React, { useState, useEffect, useRef } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [duration, setDuration] = useState(600000); // default 10 minutes
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time - 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(intervalRef.current);
    } else if (time === 0 && isActive) {
      clearInterval(intervalRef.current);
      alert('Time is up!');
      setIsActive(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);
  <h1 className="page-title">CountdownTimer</h1>

  const startStop = () => {
    if (!isActive && time === 0) {
      setTime(duration);
    }
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDuration(value * 60000); // convert minutes to milliseconds
  };

  const formatTime = (time) => {
    const milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="countdown-timer-container">
      <div className="timer">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={startStop} className={`control-button ${isActive ? 'stop' : 'start'}`}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset} className="control-button reset">Reset</button>
      </div>
      <div className="duration-input">
        <label>Set Duration (minutes): </label>
        <input
          type="number"
          value={duration / 60000}
          onChange={handleDurationChange}
          min="1"
        />
      </div>
      
    </div>
  );
}

export default CountdownTimer;
