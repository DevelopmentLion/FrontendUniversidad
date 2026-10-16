import { useState } from 'react';
import { API_BASE_URL, apiEndpoints } from '../config/api';

interface GoogleAuthResponse {
  authUrl: string;
  state: string;
}

interface GoogleCourse {
  id: string;
  name: string;
  section?: string;
  descriptionHeading?: string;
  description?: string;
  courseState: string;
  creationTime: string;
}

export const useGoogleClassroom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [oauthState, setOAuthState] = useState<string | null>(null);

  const initiateAuth = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoints.classroom.auth}`);
      
      if (!response.ok) {
        throw new Error('Failed to initiate Google OAuth');
      }

      const data: GoogleAuthResponse = await response.json();
      setOAuthState(data.state);
      
      // Abrir la URL de autorización en una nueva ventana
      window.open(data.authUrl, '_blank', 'width=500,height=600');
      
      return data.state;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (courseData: {
    name: string;
    section?: string;
    descriptionHeading?: string;
    description?: string;
    courseState?: 'ACTIVE' | 'ARCHIVED' | 'PROVISIONED' | 'DECLINED';
  }) => {
    if (!oauthState) {
      setError('Not authenticated with Google. Please authenticate first.');
      throw new Error('Not authenticated');
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoints.classroom.courses}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-OAuth-State': oauthState,
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create course');
      }

      const data = await response.json();
      return data.course as GoogleCourse;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create course');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const checkAuthStatus = async (state: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}${apiEndpoints.classroom.status}/${state}`);
      
      if (!response.ok) {
        throw new Error('Failed to check auth status');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check status');
      throw err;
    }
  };

  return {
    loading,
    error,
    oauthState,
    initiateAuth,
    createCourse,
    checkAuthStatus,
  };
};
