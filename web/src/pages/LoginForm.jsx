import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Make sure this CSS file exists in the same folder

export const LoginPage = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        {/* Header */}
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Enter your credentials to access your account</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Password</label>
              <a href="#" className="forgot-link">Forgot?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        {/* Social Login */}
        <button className="google-btn">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
          <span>Google</span>
        </button>

        {/* Footer */}
        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register" className="register-link">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};