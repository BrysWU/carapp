const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-render-app.onrender.com/api'
  : 'http://localhost:3000/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
};

export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    verify: '/auth/verify',
  },
  users: {
    profile: '/users/profile',
    stats: '/users/stats',
  },
  groups: {
    list: '/groups',
    join: '/groups/join',
    leave: '/groups/leave',
    create: '/groups/create',
  },
  cars: {
    list: '/cars',
    add: '/cars',
    update: '/cars',
    delete: '/cars',
  },
};