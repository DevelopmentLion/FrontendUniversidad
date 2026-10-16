import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = () => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const userProfile = localStorage.getItem('userProfile');

    if (loggedIn === 'true' && userProfile) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userProfile));
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();

    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  const login = (email: string, _password: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    const defaultUser = {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: email,
      phone: '+52 55 1234 5678',
      dateOfBirth: '2000-05-15',
      address: 'Av. Reforma 123, Col. Centro, CDMX',
      bio: 'Estudiante de Ingeniería en Sistemas Computacionales con interés en desarrollo web y inteligencia artificial.',
      language: 'es',
      timezone: 'America/Mexico_City',
      courses: 7,
      average: 8.5,
      joinedDate: 'Enero 2024'
    };

    localStorage.setItem('userProfile', JSON.stringify(defaultUser));
    setUser(defaultUser);
    setIsAuthenticated(true);
    window.dispatchEvent(new Event('auth-change'));
    navigate('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userProfile');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const updateUser = (userData: any) => {
    localStorage.setItem('userProfile', JSON.stringify(userData));
    setUser(userData);
  };

  return { isAuthenticated, user, login, logout, updateUser, loading };
};
