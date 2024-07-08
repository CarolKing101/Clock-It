import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Clock from './components/Clock';
import Countdown from './components/Countdown';
import Weather from './components/Weather';
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <div className="section" id="home">
        <Clock />
      </div>
      <div className="section" id="countdown">
        <Countdown />
      </div>
      <div className="section" id="weather">
        <Weather />
      </div>
      <div className="section" id="calendar">
        <Calendar />
      </div>
      <div className="section" id="settings">
        <Settings toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src="/clockit-logo.jpg" alt="Clock-It Logo" />
        </li>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="countdown"
            spy={true}
            smooth={true}
            duration={500}
          >
            Countdown Timer
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="weather"
            spy={true}
            smooth={true}
            duration={500}
          >
            Weather
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="calendar"
            spy={true}
            smooth={true}
            duration={500}
          >
            Calendar
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="settings"
            spy={true}
            smooth={true}
            duration={500}
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
