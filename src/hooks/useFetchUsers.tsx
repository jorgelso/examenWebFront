import { useState } from "react";

interface LoginResponse {
  success: boolean;
  user?: {
    fullName: string;
    ticketNumber: string;
  };
  message?: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<LoginResponse> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    } catch (err) {
      setError((err as Error).message);
      return { success: false, message: (err as Error).message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
