export interface RestrationValues {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  hasAgreed: boolean;
}

export interface UserData extends RestrationValues {
  id: string;
}
