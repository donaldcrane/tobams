import { Schema, model } from "mongoose";
import { IUser } from "../utils";

const userSchema = new Schema(
  {
    username: {
      type: String, unique: true, trim: true, lowercase: true
    },
    password: { type: String },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
