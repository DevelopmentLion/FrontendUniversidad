import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, apiEndpoints } from '../config/api';

const LOCAL_USERS = {
  student: {
    id: 'local-student-1',
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'estudiante@demo.com',
    password: 'demo123',
    role: 'student',
    phone: '+52 55 1234 5678',
    dateOfBirth: '2000-05-15',
    address: 'Ciudad de México',
    bio: 'Estudiante de Ingeniería en Sistemas',
    language: 'es',
    timezone: 'America/Mexico_City',
    courses: 7,
    average: 8.5,
    joinedDate: '2023-08-15',
  },
  teacher: {
    id: 'local-teacher-1',
    firstName: 'María',
    lastName: 'García',
    email: 'docente@demo.com',
    password: 'demo123',
    role: 'teacher',
    phone: '+52 55 8765 4321',
    dateOfBirth: '1985-03-20',
    address: 'Ciudad de México',
    bio: 'Profesora de Programación y Bases de Datos',
    language: 'es',
    timezone: 'America/Mexico_City',
    courses: 3,
    average: 0,
    joinedDate: '2020-01-10',
  },
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userProfile = localStorage.getItem('userProfile');

    if (token && userProfile) {
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

  const login = async (email: string, password: string) => {
    try {
      const localUser = Object.values(LOCAL_USERS).find(
        (u) => u.email === email && u.password === password
      );

      if (localUser) {
        const token = `local-token-${Date.now()}`;
        localStorage.setItem('token', token);
        localStorage.setItem('userProfile', JSON.stringify(localUser));
        setUser(localUser);
        setIsAuthenticated(true);
        window.dispatchEvent(new Event('auth-change'));

        if (localUser.role === 'teacher') {
          navigate('/teacher-dashboard');
        } else {
          navigate('/dashboard');
        }
        return;
      }

      const response = await fetch(`${API_BASE_URL}${apiEndpoints.auth.login}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('userProfile', JSON.stringify(data.user));
      setUser(data.user);
      setIsAuthenticated(true);
      window.dispatchEvent(new Event('auth-change'));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const updateUser = async (userData: any) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}${apiEndpoints.users.profile}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      localStorage.setItem('userProfile', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  return { isAuthenticated, user, login, logout, updateUser, loading };
};
