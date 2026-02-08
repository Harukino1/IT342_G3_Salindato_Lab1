import React from 'react';
import '../components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">WorkForce Portal</h2>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Attendance</button>
          <button className="nav-item">Schedule</button>
          <button className="nav-item">Leave</button>
          <button className="nav-item">Settings</button>
        </nav>

        <button className="logout">Logout</button>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Welcome Header Container */}
        <section className="welcome-container">
          <div className="avatar">👤</div>
          <h1>
            Welcome,<br />
            <span>Doe, John</span>
          </h1>
        </section>

        {/* Content */}
        <section className="content">
          {/* Announcement Board */}
          <div className="card announcement">
            <h3>Announcement Board</h3>
            <div className="card-box">
              <p>No announcements yet.</p>
            </div>
          </div>

          {/* Activity Log */}
          <div className="card activity">
            <h3>Activity Log</h3>
            <div className="card-box">
              <ul>
                <li>Jan 12 — Time In 8:30 AM</li>
                <li>Jan 11 — Time In 9:00 AM</li>
                <li>Jan 10 — Time In 8:45 AM</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;