import axios, { AxiosResponse } from "axios";

interface RegisterInputData {
  username: string;
  email: string;
  password: string;
}

interface UserInputData {
  username: string;
  password: string;
}

interface Token {
  token: string;
}

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const registerUser = async (
  data: RegisterInputData
): Promise<string> => {
  try {
    const response: AxiosResponse<Token> = await api.post(
      "/auth/register",
      data
    );
    const { token } = response.data;
    return token;
  } catch (error) {
    throw error;
  }
};

export const userExists = async (data: UserInputData): Promise<string> => {
  try {
    const response: AxiosResponse<Token> = await api.post(
      "/auth/login",
      data
    );
    const { token } = response.data;
    return token;
  } catch (error) {
    throw error;
  }
};
