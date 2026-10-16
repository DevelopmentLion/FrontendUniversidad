export const API_BASE_URL = 'https://universidad-backend.developmentec.workers.dev';

export const apiEndpoints = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
  },
  users: {
    profile: '/api/users/profile',
  },
  courses: '/api/courses',
  sessions: '/api/sessions',
  grades: '/api/grades',
  activities: '/api/activities',
  classroom: {
    auth: '/api/classroom/auth',
    callback: '/api/classroom/callback',
    courses: '/api/classroom/courses',
    status: '/api/classroom/status',
  },
};
