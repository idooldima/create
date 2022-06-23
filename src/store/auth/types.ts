import { ErrorType } from "../types";

export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  token?: string;
};

export type AuthStateType = {
  currentUser: User | null;
  isLoading: boolean;
  error: ErrorType | null;
};


