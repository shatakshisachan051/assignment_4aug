import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { ProtectedRoute } from './ProtectedRoute';
import { Header } from './Header';
import { Profile } from './Profile';
import { Settings } from './Settings';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<p>Welcome to your dashboard!</p>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
