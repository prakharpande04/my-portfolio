import React from 'react';
import './../styles/Loader.css';
import loaderlogo from './../assets/loaderlogo.png'; // Adjust the path to your logo file

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderlogo} alt="Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;