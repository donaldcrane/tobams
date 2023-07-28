export interface CreateUserData {
  username: string;
  password: string;
}

export interface UserData {
  _id?: string;
  username: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}