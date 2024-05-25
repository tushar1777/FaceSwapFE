import React from 'react';

const LandingPage = ({ onUploadClick }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to Face Swap</h1>
      <p>Upload two images to swap their faces</p>
      <button onClick={onUploadClick}>Upload Images</button>
    </div>
  );
};

export default LandingPage;
