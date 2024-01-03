import React from 'react';
import loaderGIF from '../Components/new/loader.gif';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderGIF} alt="Loading..." />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
