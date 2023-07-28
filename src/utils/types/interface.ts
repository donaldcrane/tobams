declare global {
  namespace Express {
    interface Request extends CustomRequest {}
  }
}

export interface CustomRequest {
  user: IUser | null;
  params: object;
  query: object;
  path: object;
  token?: string | null;
}

export interface IUser {
  _id?: string
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

export interface JwtPayload {
  _id: string;
  username: string;
}

