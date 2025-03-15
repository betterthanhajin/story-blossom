import axios from "axios";
import { authStore } from "../state/auth";

// Create API client
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = authStore.token;
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth state on 401 Unauthorized
      // You can import and call authActions.logout() here
      // For now, we'll just log the error to avoid circular imports
      console.error("Authentication error:", error);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
