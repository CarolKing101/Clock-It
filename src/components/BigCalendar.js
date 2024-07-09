import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BigCalendar.css';

// Set up the localizer using moment.js
const localizer = momentLocalizer(moment);

function BigCalendar({ theme }) {
  const [events, setEvents] = useState([]);

  // Handle selecting a time slot to add a new event
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className={`big-calendar-container ${theme}`}>
      <Calendar
      
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelect}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
}

export default BigCalendar;
