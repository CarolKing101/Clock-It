import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './Clock.css';

const Clock = ({ theme }) => {
  const [time, setTime] = useState(moment());
  const [city, setCity] = useState('UTC');

  const cityOffsetMap = {
    'UTC': 0,
    'Accra' : 0,
    'New York': -4,
    'London': 0,
    'Tokyo': 9,
    'Sydney': 10,
    'Los Angeles': -8, // Pacific Standard Time (PST)
    'Chicago': -6, // Central Standard Time (CST)
    'Paris': 1, // Central European Time (CET)
    'Berlin': 1, // Central European Time (CET)
    'Rome': 1, // Central European Time (CET)
    'Beijing': 8, // China Standard Time (CST)
    'Mumbai': 5.5, // Indian Standard Time (IST)
    'Dubai': 4, // Gulf Standard Time (GST)
    'Moscow': 3, // Moscow Standard Time (MSK)
    'Cairo': 2, // Eastern European Time (EET)
    'Johannesburg': 2, // South African Standard Time (SAST)
    'Rio de Janeiro': -2, // Brasilia Time (BRT)
    'Buenos Aires': -3, // Argentina Time (ART)
    'Mexico City': -6, // Central Standard Time (CST)
    'Lima': -5, // Peru Time (PET)
    'Santiago': -3, // Chile Standard Time (CLT)
    'Istanbul': 3, // Turkey Time (TRT)
    'Kuala Lumpur': 8, // Malaysia Time (MYT)
    'Bangkok': 7, // Thailand Standard Time (THA)
    'Hong Kong': 8, // Hong Kong Time (HKT)
    'Singapore': 8, // Singapore Standard Time (SGT)
    'Seoul': 9, // Korea Standard Time (KST)
    'Melbourne': 10, // Australian Eastern Standard Time (AEST)
    'Auckland': 12, // New Zealand Standard Time (NZST)
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getCityTime = () => {
    const currentTime = moment();
    const utcOffset = currentTime.utcOffset();
    const cityOffset = cityOffsetMap[city] * 60;
    const totalOffset = cityOffset - utcOffset;
    return currentTime.add(totalOffset, 'minutes').format('HH:mm:ss');
  };

  return (
    <div className={`clock-container ${theme}`}>
      <h1>{city} Time</h1>
      <h2>{getCityTime()}</h2>
      <select onChange={handleCityChange} value={city}>
        {Object.keys(cityOffsetMap).map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Clock;
