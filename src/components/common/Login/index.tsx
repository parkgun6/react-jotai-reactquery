import { useAtom } from 'jotai';
import { useState } from 'react';
import { useLogin } from '../../../api/auth';
import { authErrorAtom, userAtom } from '../../../atoms/atoms';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAtom(userAtom);
  const [authError] = useAtom(authErrorAtom);
  const loginMutation = useLogin();
  const navigator = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  if (user) {
    navigator('/');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default Login;
