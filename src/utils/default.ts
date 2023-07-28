import { Response, Request, NextFunction } from "express";
import { ObjectSchema, ValidationOptions } from "joi";
import { IUser } from "./types";

export type Controller = (req: Request, res: Response) => Promise<Response>;

export type MiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response | void> | Response | void;

export interface ControllerParams<T, R, F> {
  res: Response;
  req: Request;
  service: Service<T, R, F>;
  params?: ServiceParams<T, F>;
  validation?: ValidationRequest;
  filterValidation?: ObjectSchema;
}

export interface ValidationRequest {
  schema: ObjectSchema;
  options?: ValidationOptions;
}

export type Service<T = unknown, R = unknown, F = unknown> = (
  params: Required<ServiceParams<T, F>>
) => Promise<ServiceResponse<R>>;

export interface ServiceParams<T = unknown, F = unknown> {
  id?: number;
  data?: T;
  validatedData?: T;
  pagination?: Pagination;
  filters?: F | { [key: string]: string };
  reference?: string;
  query?: string;
  scope?: string;
  user?: IUser | null;
  token?: string;
}

export interface Pagination {
  page: number;
  size: number;
  totalPages?: number;
  totalItems?: number;
}

export interface PaginatedData<T> {
  results?: T[];
  ratings?: T;
  pagination: Pagination;
}

export interface ServiceResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T | "";
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface JwtGenerationPayload {
  _id: string;
  username: string;
}

export interface ModuleResponse<T> {
  data?: T;
  error?: string | null;
}
