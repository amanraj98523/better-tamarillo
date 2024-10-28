import React, { useState } from 'react';
import './App.css';


function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      <div className="form-container">
        <h2 className="form-title">Login Form</h2>
        <div className="form-toggle">
          <button
            onClick={() => setIsLogin(true)}
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <div className="form-content">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button className="submit-btn">Login</button>
            <p className="form-footer">
              Not a member? <a href="#" onClick={toggleForm}>Signup now</a>
            </p>
          </div>
        ) : (
          <div className="form-content">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Signup</button>
            <p className="form-footer">
              Already a member? <a href="#" onClick={toggleForm}>Login</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
