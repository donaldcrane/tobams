import {
  MiddleWare,
  unauthorizedError,
  unknownServerError,
  validateUserToken,
} from "../utils";
import db from "../models"

export const isAuthenticated: MiddleWare = async (req, res, next) => {
  if (!req.get("Authorization"))
      return res
        .status(401)
        .send({ success: false, message: unauthorizedError });
  try {
    const token = (req.header("Authorization") || "Bearer _").split(" ")[1];

    const verified = await validateUserToken(token);
    if (!verified)
        return res
          .status(401)
          .send({ success: false, message: unauthorizedError });

    const  userData = await  db.User.findOne({ username:  verified.username})
    if (!userData)
      return res.status(500).send({
        success: false,
        message: "Account does not exist",
      });

    req.user = userData;
    req.token = token;
    return next();
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .send({ success: false, message: unknownServerError });
  }
};
