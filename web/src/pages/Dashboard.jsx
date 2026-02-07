import React, { useState } from 'react';
import '../components/Dashboard.css';

const Dashboard = () => {
  const [activityLog] = useState([
    { date: 'Jan 12', timeIn: '08:30 AM' },
    { date: 'Jan 11', timeIn: '09:00 AM' },
    { date: 'Jan 10', timeIn: '08:45 AM' },
    { date: 'Jan 09', timeIn: '08:50 AM' },
    { date: 'Jan 08', timeIn: '09:10 AM' },
    { date: 'Jan 07', timeIn: '08:40 AM' },
  ]);

  const [announcements] = useState([
    'Company meeting on Feb 10',
    'New policy updates available',
    'Team lunch scheduled on Feb 15',
    'Quarterly review on Feb 20',
    'Reminder: Submit timesheets by Friday',
    'Office maintenance on Feb 18',
  ]);

  const handleSidebarClick = (item) => {
    alert(`${item} clicked!`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Company</h2>
        <div className="sidebar-buttons">
          {['Dashboard', 'My Attendance', 'Schedule', 'Leave Requests', 'Help/Support', 'Settings'].map((item) => (
            <button key={item} onClick={() => handleSidebarClick(item)}>
              {item}
            </button>
          ))}
        </div>
        <button className="logout-btn" onClick={() => handleSidebarClick('Logout')}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Profile Info */}
        <div className="profile-info-section">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="profile-pic"
          />
          <span className="profile-name">John Doe</span>
        </div>

        {/* Cards Container */}
        <div className="cards-container">
          {/* Activity Log */}
          <div className="activity-card card">
            <h3>Activity Log</h3>
            {activityLog.length === 0 ? (
              <p className="placeholder-text">No activity yet</p>
            ) : (
              <ul>
                {activityLog.map((item, idx) => (
                  <li key={idx}>
                    {item.date} - Time In: {item.timeIn}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Announcements */}
          <div className="announcement-card card">
            <h3>Announcements</h3>
            {announcements.length === 0 ? (
              <p className="placeholder-text">No announcements yet</p>
            ) : (
              <ul>
                {announcements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;