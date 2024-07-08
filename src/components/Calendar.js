import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function MyCalendar({ theme }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={`calendar-container ${theme}`}>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
}

export default MyCalendar;
