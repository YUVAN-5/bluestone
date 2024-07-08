import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Form from './components/Form';
import Signup from './components/Signup';
import Service from './components/Service';

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">
          BlueStone Overseas Consultants
        </div>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/services">Services</Link>
          <Link to="/form">Form</Link>
          <Link to="/login">Login</Link>
          
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} /> {/* Placeholder for Services page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
