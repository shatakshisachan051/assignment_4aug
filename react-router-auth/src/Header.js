import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const Header = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header>
      <Link to="/">Home</Link>{" "}
      {isLoggedIn ? (
        <>
          <Link to="/dashboard">Dashboard</Link>{" "}
          <button onClick={() => { logout(); navigate('/'); }}>Logout</button>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>Login</button>
      )}
    </header>
  );
};
