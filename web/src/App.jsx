import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
// import { RegisterPage } from './pages/RegisterPage'; // Uncomment when created

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<div>Register UI Coming Soon</div>} />

        {/* Protected Routes (We will add the logic for this later) */}
        <Route path="/dashboard" element={<div>Dashboard UI Coming Soon</div>} />
      </Routes>
    </Router>
  );
}

export default App;