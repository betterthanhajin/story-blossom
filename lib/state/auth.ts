import { proxy } from "valtio";

export type User = {
  id: string;
  username: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

export const authStore = proxy<AuthState>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
});

// Auth actions
export const authActions = {
  login: async (email: string, password: string) => {
    try {
      authStore.isLoading = true;
      authStore.error = null;

      // TODO: Replace with actual API call
      // const response = await api.login(email, password);

      // Simulate API response for now
      await new Promise((resolve) => setTimeout(resolve, 800));

      const mockResponse = {
        token: "mock-jwt-token",
        user: {
          id: "1",
          username: email.split("@")[0],
          email,
        },
      };

      authStore.token = mockResponse.token;
      authStore.user = mockResponse.user;
      authStore.isAuthenticated = true;

      // Store token in localStorage for persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("token", mockResponse.token);
      }

      return true;
    } catch (error) {
      authStore.error = "Invalid email or password";
      console.error("Login error:", error);
      return false;
    } finally {
      authStore.isLoading = false;
    }
  },

  register: async (username: string, email: string, password: string) => {
    try {
      authStore.isLoading = true;
      authStore.error = null;

      // TODO: Replace with actual API call
      // const response = await api.register(username, email, password);

      // Simulate API response for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockResponse = {
        token: "mock-jwt-token",
        user: { id: "1", username, email },
      };

      authStore.token = mockResponse.token;
      authStore.user = mockResponse.user;
      authStore.isAuthenticated = true;

      // Store token in localStorage for persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("token", mockResponse.token);
      }

      return true;
    } catch (error) {
      authStore.error = "Registration failed. Please try again.";
      console.error("Register error:", error);
      return false;
    } finally {
      authStore.isLoading = false;
    }
  },

  logout: () => {
    authStore.user = null;
    authStore.token = null;
    authStore.isAuthenticated = false;

    // Remove token from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },

  initialize: () => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        // Set token in store
        authStore.token = token;
        authStore.isAuthenticated = true;

        // TODO: Fetch current user with token
        // In a real app, we'd validate the token and fetch the user
        // For now, we'll just set a mock user
        authStore.user = {
          id: "1",
          username: "user",
          email: "user@example.com",
        };
      }
    }
  },
};
