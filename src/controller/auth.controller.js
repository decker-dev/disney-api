import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { User } from "../database/database";
import { success, error } from "../utils/response";
import moment from "moment";
import jwt from "jwt-simple"
require('dotenv').config()
export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return error(
      req,
      res,
      {
        errores: errors.array(),
      },
      422
    );
  }
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  await User.create(req.body);
  success(req, res, "Se creo el usuario", 200);
};
export const login = async (req, res) => {
  const user = await User.findOne({where: {email: req.body.email}})
  if(user){
    const same = bcrypt.compareSync(req.body.password, user.password)
    if(same){
      success(req, res, createToken(user),200)
    }else{
      error(req, res,'Error en email y/o contraseña',203)
    }
  }else{
    error(req, res,'Error en email y/o contraseña',203)
  }
};
const createToken=(user)=>{
  const payload = {
    userId : user.id,
    createdAt : moment().unix(),
    expiresAt : moment().add(5,'minutes').unix()

  }
  return jwt.encode(payload,process.env.SECRET_KEY)
}