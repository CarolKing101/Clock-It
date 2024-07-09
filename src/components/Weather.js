import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ theme }) => {
  const [city, setCity] = useState('Accra');
  const [weather, setWeather] = useState(null);

  const cityList = [
    'Accra', 'New York', 'London', 'Tokyo', 'Sydney',
    'Los Angeles', 'Chicago', 'Paris', 'Berlin', 'Rome',
    'Beijing', 'Mumbai', 'Dubai', 'Moscow', 'Cairo',
    'Johannesburg', 'Rio de Janeiro', 'Buenos Aires',
    'Mexico City', 'Lima', 'Santiago', 'Istanbul',
    'Kuala Lumpur', 'Bangkok', 'Hong Kong', 'Singapore',
    'Seoul', 'Melbourne', 'Auckland'
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '25dbb2565274d871f78e7b8e44a56132'; // Replace with your OpenWeather API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={`page-container weather-background ${theme}`}>
      <h1>Weather</h1>
      <select onChange={handleCityChange} value={city}>
        {cityList.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
