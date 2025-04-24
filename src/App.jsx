import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import SignUp from './components/SignUp.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <nav>
          <Link to="/">Home</Link> <br />
          <Link to="/join">Join</Link><br />
          <Link to="/login">Login</Link> <br />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;