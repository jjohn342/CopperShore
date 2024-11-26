// src/Account.js
import React from 'react';
import './Account.css'; // Import the CSS for styling

function Account() {
  return (
    <div className="account-container">
      {/* Header */}
      <h1 className="account-title">Account</h1>
      <p className="account-description">Manage your account details and preferences here.</p>

      {/* Sign-In Section */}
      <div className="account-actions">
        <h2 className="account-subtitle">Sign In / Sign Up</h2>
        <p>Sign in using your Google account to access your account information.</p>
        <button className="sign-in-button">Sign in with Google</button>
      </div>

      {/* Account Details Placeholder */}
      <div className="account-details">
        <h2 className="account-subtitle">Your Account</h2>
        <p>
          Once signed in, your account details will appear here, including your name, email, and other
          preferences.
        </p>
        <div className="account-info">
          <p>Name: <span className="placeholder">[Your Name]</span></p>
          <p>Email: <span className="placeholder">[Your Email]</span></p>
        </div>
      </div>
    </div>
  );
}

export default Account;
