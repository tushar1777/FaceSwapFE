import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import LandingPage from './LandingPage';

function App() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [error, setError] = useState(null);
  const [swappedImages, setSwappedImages] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [filename1, setFilename1] = useState('');
  const [filename2, setFilename2] = useState('');

  const handleImage1Change = (e) => {
    setImage1(e.target.files[0]);
    setFilename1(e.target.files[0].name);
  };

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0]);
    setFilename2(e.target.files[0].name);
  };

  const handleUpload1Click = () => {
    document.getElementById('image1').click();
  };

  const handleUpload2Click = () => {
    document.getElementById('image2').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image1 || !image2) {
      setError('Please select two images.');
      return;
    }
    const formData = new FormData();
    formData.append('images', image1);
    formData.append('images', image2);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSwappedImages([response.data.swapped1_url, response.data.swapped2_url]);
      setError(null);
    } catch (error) {
      console.error('Error uploading images', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App" style={{ background: 'linear-gradient(to right, #2196F3, #FFFFFF)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {!showUpload && <LandingPage onUploadClick={() => setShowUpload(true)} />}
      {showUpload && (
        <div className="upload-container">
          <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>Face Swap</h1>
          <div className="upload-buttons">
            <input id="image1" type="file" accept="image/*" onChange={handleImage1Change} style={{ display: 'none' }} />
            <button onClick={handleUpload1Click} style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginRight: '20px' }}>Upload Image 1</button>
            {image1 && <span>{filename1}</span>}
            <br />
            <br />
            <input id="image2" type="file" accept="image/*" onChange={handleImage2Change} style={{ display: 'none' }} />
            <button onClick={handleUpload2Click} style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginRight: '20px' }}>Upload Image 2</button>
            {image2 && <span>{filename2}</span>}
          </div>
          <form onSubmit={handleSubmit}>
            <br />
            <button type="submit" style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Swap Faces</button>
          </form>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </div>
      )}
      <div className="section-container">
        {image1 && image2 && (
          <div className="section">
            <h2>Original Images</h2>
            <div className="image-container">
              <div>
                <h3>Image 1: {filename1}</h3>
                <img src={image1 ? URL.createObjectURL(image1) : ''} alt="Original 1" className="image" />
              </div>
              <div>
                <h3>Image 2: {filename2}</h3>
                <img src={image2 ? URL.createObjectURL(image2) : ''} alt="Original 2" className="image" />
              </div>
            </div>
          </div>
        )}
        {swappedImages.length > 0 && (
          <div className="section">
            <h2>Swapped Images</h2>
            <div className="image-container">
              {swappedImages.map((image, index) => (
                <div key={index}>
                  <h3>Swapped Image {index + 1}</h3>
                  <img src={`http://localhost:5000/${image}`} alt={`Swapped ${index + 1}`} className="image" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
