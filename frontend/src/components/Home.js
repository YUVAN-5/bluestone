import React from 'react';
import img1 from '../assets/img/homeimg.jpg';
function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to Bluestone Educational Consultancy</h1>
      <img src={img1} alt="Overseas Consultants" style={{ maxWidth: '100%', maxHeight: '400px', margin: '20px 0' }} />
      <p>Your success is our priority.</p>
    </div>
  );
}

export default Home;
