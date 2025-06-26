// src/index.js
// This code is designed for manual React/Babel setup and relies on Adalo's global runtime.

import React from 'react';
// IMPORTANT: Do NOT import ReactDOM or AdaloComponent from '@adalo/lib' here.
// Adalo's runtime will make 'AdaloComponent' globally available.

// You can create a basic CSS file if needed in src/index.css
// import './index.css'; 

// Your main React component that Adalo will render and expose in the builder.
// It receives 'props' from Adalo, including any defined in manifest.json.
const ActiveTopiaCalendarComponent = (props) => {
  // Access the 'title' prop defined in manifest.json
  const calendarTitle = props.title || "Default Calendar Title"; // Use default if prop isn't set

  return (
    // The component itself should render its content directly within a div.
    // Adalo's runtime injects this into its own container.
    <div style={{ padding: 20, textAlign: 'center', backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ color: '#6A0DAD' }}>{calendarTitle}</h2>
      <p style={{ fontSize: 16, color: '#333' }}>
        Welcome to your custom ActiveTopia Calendar!
      </p>
      <p style={{ fontSize: 14, color: '#555' }}>
        (This will soon be a powerful calendar with recurring events)
      </p>
    </div>
  );
};

// This is the crucial step to register your component with Adalo's runtime.
// The 'AdaloComponent' object is provided globally by Adalo when your component runs in their environment.
// The 'componentId' here MUST match the 'componentId' in your manifest.json.
if (typeof AdaloComponent !== 'undefined' && AdaloComponent.register) {
  AdaloComponent.register('active-topia-calendar', ActiveTopiaCalendarComponent);
} else {
  // This console.error will show if you try to run it outside Adalo (e.g., local browser dev)
  // because 'AdaloComponent' won't exist globally. This is expected behavior for local testing.
  console.error("AdaloComponent SDK not available for registration. This is expected during local development without Adalo's runtime.");
}
