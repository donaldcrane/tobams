import Joi from "joi";
import {
  LoginData,
} from "../utils";

export const registerSchema = Joi.object({
  username: Joi.string().min(2).max(20).required(),
  password: Joi.string().required().min(3).max(16),
});

export const loginSchema = Joi.object<LoginData>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
