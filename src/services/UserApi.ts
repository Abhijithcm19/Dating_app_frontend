import axios, { AxiosInstance } from "axios";

const baseURL: string = "http://localhost:3000";

const api: AxiosInstance = axios.create({
  baseURL,
});

interface AuthFormData {
  username: string;
  password: string;
  email?: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}
interface User {
  id: string;
  name: string;
  email: string;
  googlePhotoUrl?: string;
}

const signUp = async (formData: AuthFormData): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>("/api/auth/signup", formData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const login = async (formData: AuthFormData): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>("/api/auth/login", formData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const google = async (userData: {
  name: string;
  email: string;
  googlePhotoUrl: string;
}): Promise<User> => {
  try {
    const response = await api.post("/api/auth/google", userData);
    return response.data as User;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to authenticate with Google"
    );
  }
};
export { signUp, login, google };
