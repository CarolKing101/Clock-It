import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import CountdownTimer from './components/CountdownTimer';
import Weather from './components/Weather';
import BigCalendar from './components/BigCalendar';
import Settings from './components/Settings';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <div className="section" id="home">
        <Clock theme={theme} />
      </div>
      <div className="section" id="stopwatch">
        <Stopwatch theme={theme} />
      </div>
      <div className="section" id="countdown-timer">
        <CountdownTimer theme={theme} />
      </div>
      <div className="section" id="weather">
        <Weather theme={theme} />
      </div>
      <div className="section" id="calendar">
        <BigCalendar theme={theme} />
      </div>
      <div className="section" id="settings">
        <Settings toggleTheme={toggleTheme} />
      </div>
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li className="logo">
        <img src={'/Logo2.png'} alt="Clock-It Logo" />
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
            to="stopwatch"
            spy={true}
            smooth={true}
            duration={500}
          >
            Stopwatch
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="countdown-timer"
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
