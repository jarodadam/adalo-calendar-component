// src/index.js
import React, { useState } from 'react'; // Import useState
// import './index.css'; // Keep or remove if you need a global CSS file
import Calendar from 'react-calendar'; // Import the react-calendar component
import 'react-calendar/dist/Calendar.css'; // Import default react-calendar styles

// Your main React component that Adalo will render.
const ActiveTopiaCalendarComponent = (props) => {
  const calendarTitle = props.title || "My Adalo Calendar";
  const [value, onChange] = useState(new Date()); // State for the calendar's selected date

  return (
    <div style={{ padding: 20, textAlign: 'center', backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ color: '#6A0DAD', marginBottom: 20 }}>{calendarTitle}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        {/* The Calendar component */}
        <Calendar
          onChange={onChange} // Function to call when date changes
          value={value}      // Currently selected date
          // You can add more props here later for customization (e.g., showNeighboringMonth, tileContent, etc.)
        />
      </div>

      <p style={{ fontSize: 16, color: '#333' }}>
        Selected Date: {value.toLocaleDateString()}
      </p>
      <p style={{ fontSize: 14, color: '#555' }}>
        (This is your custom calendar!)
      </p>
    </div>
  );
};

// This is the crucial step to register your component with Adalo's runtime.
if (typeof AdaloComponent !== 'undefined' && AdaloComponent.register) {
  AdaloComponent.register('active-topia-calendar', ActiveTopiaCalendarComponent);
} else {
  console.error("AdaloComponent SDK not available for registration. This is expected during local development without Adalo's runtime.");
}