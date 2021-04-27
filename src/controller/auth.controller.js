import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { User } from "../database/database";
import { success, error } from "../utils/response";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return error(req, res, {
         errores: errors.array() 
        }, 422);
  }
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const user = await User.create(req.body);
  res.json({
    message: "Se creo el usuario",
  });
};
