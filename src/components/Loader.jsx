import React from 'react';
import './../styles/Loader.css';
import loaderlogo from './../assets/loaderlogo.png'; // Adjust the path to your logo file

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderlogo} alt="Logo" className="loader-logo" />

      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Loader;