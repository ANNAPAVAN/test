import React, { createContext, useState, useEffect } from 'react';

// Create a context for authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    // Define pre-defined users
    const predefinedUsers = [
      { username: 'user1', password: 'pass1' },
      { username: 'user2', password: 'pass2' },
    ];

    const user = predefinedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };
 
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 
