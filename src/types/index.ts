import { Action } from "redux";

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  userId?: string;
  message?: string;
  error?: string;
}

export interface AuthAction extends Action {
  payload?: Partial<AuthState>;
}

export enum AppRoutes {
  LOGIN = "/login",
}
