import {
  fetchDashboard,
  signInUser,
    signUpUser,

} from "../services";
import { controller } from "../core";
import { Controller } from "../utils";
import {
  loginSchema,
 registerSchema
} from "../schemas";


export const registerUser: Controller = (req, res) =>
  controller({
    req,
    res,
    service: signUpUser,
    validation: { schema: registerSchema },
  });

export const loginUser: Controller = (req, res) =>
  controller({
    req,
    res,
    service: signInUser,
    validation: { schema: loginSchema },
  });

export const getDashboard: Controller = (req, res) =>
  controller({
    req,
    res,
    service: fetchDashboard,
  });
