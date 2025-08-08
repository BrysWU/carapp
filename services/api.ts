import { apiConfig, endpoints } from '../config/api';

class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = apiConfig.baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request(endpoints.auth.login, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: any) {
    return this.request(endpoints.auth.register, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // User methods
  async getUserProfile() {
    return this.request(endpoints.users.profile);
  }

  async getUserStats() {
    return this.request(endpoints.users.stats);
  }

  // Groups methods
  async getGroups() {
    return this.request(endpoints.groups.list);
  }

  async joinGroup(groupId: string) {
    return this.request(endpoints.groups.join, {
      method: 'POST',
      body: JSON.stringify({ groupId }),
    });
  }

  // Cars methods
  async getCars() {
    return this.request(endpoints.cars.list);
  }

  async addCar(carData: any) {
    return this.request(endpoints.cars.add, {
      method: 'POST',
      body: JSON.stringify(carData),
    });
  }
}

export const apiService = new ApiService();