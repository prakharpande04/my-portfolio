import React from 'react';
import './../styles/Education.css';

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <ul className="education-list">
        <li className="education-item">
          <h2>University Name</h2>
          <p>Degree, Major</p>
          <p>Year of Graduation</p>
        </li>
        <li className="education-item">
          <h2>College Name</h2>
          <p>Degree, Major</p>
          <p>Year of Graduation</p>
        </li>
        {/* Add more education items as needed */}
      </ul>
    </div>
  );
};

export default Education;