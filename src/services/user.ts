import {
  Service,
  response,
  notExistError,
  UserData,
  incorrectCredentials,
  generateToken,
  LoginData,
  CreateUserData,
  existError,
} from "../utils";
import { service } from "../core";
import bcrypt from "bcrypt";
import db from "../models";


export const signUpUser: Service<CreateUserData> = ({
  validatedData,
}) =>
  service(async () => {
    const { username, password} = validatedData
    const usernameExist = await db.User.findOne({ username})

    if (usernameExist) return response.conflict(existError("username"));

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.User.create({
      username,
      password: hashedPassword
    });
    return response.created(
      "Account created successfully, kindly log into account"
    );
  });

export const signInUser: Service<LoginData> = ({ validatedData }) =>
  service(async () => {
    const { username, password } = validatedData;
    const foundUser = await db.User.findOne({username});
    
    if (!foundUser) return response.notFound(notExistError("username"));

    const match = await bcrypt.compare(password, foundUser.password ?? "");
    if (!match) return response.badRequest(incorrectCredentials);

    const user = foundUser as UserData;
    const token = await generateToken({
      id: user._id,
      username: user.username,
    });
  
    const userDetails= {
      _id: user._id,
      username: user.username
    }
   
    return response.success(
      { userDetails, token },
      "User logged in successfully"
    );
  });




export const fetchDashboard: Service = ({
  user,
}) =>
  service(async () => {
    if (!user) return response.serverError();
    return response.success(`welcome to your dashboard ${user.username}`);
  });