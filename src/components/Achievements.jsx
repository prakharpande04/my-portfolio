import React from 'react';
import './../styles/Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>Achievements</h1>
      <ul className="achievements-list">
        <li className="achievement-item">
          <h2>Achievement Title</h2>
          <p>Description of the achievement</p>
        </li>
        <li className="achievement-item">
          <h2>Achievement Title</h2>
          <p>Description of the achievement</p>
        </li>
        {/* Add more achievement items as needed */}
      </ul>
    </div>
  );
};

export default Achievements;