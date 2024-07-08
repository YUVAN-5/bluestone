import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (email === '' && password === '') {
      alert('Please fill in both email and password fields.');
    }
    else if(password===''){
      alert('Please enter password!!.');
      
    }
    else {
      // Handle the login logic (e.g., API call, authentication)
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/'); 
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">Don't have an account? <Link to="/signup">Signup here</Link></p>
    </div>
  );
}

export default Login;
