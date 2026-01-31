
import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: (username: string, password: string) => void;
  error?: string;
  navigate: (path: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, error, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg brutalist-border brutalist-shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 bg-white brutalist-border rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-white brutalist-border rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent]"
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
          <div className="flex flex-col sm:flex-row-reverse gap-4">
            <button
              type="submit"
              className="w-full bg-[--accent] text-black font-bold py-3 px-4 rounded-md brutalist-button"
            >
              Login
            </button>
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="w-full block text-center bg-gray-200 text-black font-bold py-3 px-4 rounded-md brutalist-button"
            >
              Go Back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
