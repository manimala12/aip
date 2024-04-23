import { Action } from "redux";
import { LoanDetailsValues } from "../pages/loan_details/types";
import { PersonalDetailsValues } from "../pages/personal_details/types";

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  email?: string;
  message?: string;
  error?: string;
}

export interface AppData {
  loanDetails?: LoanDetailsValues;
  personalDetails?: PersonalDetailsValues;
  loading: boolean;
  message?: string;
  error?: string;
}

export interface AuthAction extends Action {
  payload?: Partial<AuthState>;
}

export interface AppDataAction extends Action {
  payload?: Partial<AppData>;
}

export enum AppRoutes {
  HOME = "/",
  ABOUT = "/about",
  LOGIN = "/login",
  PERSONAL_DETAILS = "/personal-details",
  CONTACT = "/contact",
  REGISTER = "register",
  REGISTERED = "/registered",
  LOAN_DETAILS = "/loan-details",
  INCOME_DETAILS = "income-details",
  EXPENDITURES = "/expenditures",
  RESULT = "/result",
}
