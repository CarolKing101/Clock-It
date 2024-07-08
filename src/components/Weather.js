import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '25dbb2565274d871f78e7b8e44a56132';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    setWeather(response.data);
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
