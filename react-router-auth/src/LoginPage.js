import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => { login(); navigate('/dashboard'); }}>Login</button>
    </>
  );
};
