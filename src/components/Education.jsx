import React from 'react';
import './../styles/Education.css';

const Education = () => {
  return (
    <div className="education">
      <ul className="education-list">
        <li className="education-item">
          <h2>Shri Ramdeobaba College of Engineering and Management</h2>
          <p>Undergraduate</p>
          <p>2022 - 2026</p>
        </li>
        <li className="education-item">
          <h2>Kendriya Vidyalaya Ajni</h2>
          <p>AISSCE</p>
          <p>2020 - 2022</p>
        </li>
        {/* Add more education items as needed */}
      </ul>
    </div>
  );
};

export default Education;