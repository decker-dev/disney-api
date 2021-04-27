import jwt from "jwt-simple";
import { success, error } from "../utils/response";
import config from "../../config";
import moment from "moment";
export const checkToken = async (req, res, next) => {
  if (!req.headers["user-token"]) {
    return error(
      req,
      res,
      "Nesecita incliur un Authorization en la cabecera",
      401
    );
  }
  const userToken = req.headers["user-token"];
  let payload = {};
  try {
    payload = jwt.decode(userToken, config.key.secret);
  } catch (err) {
    return error(req, res, "el token es incorrecto", 401);
  }
  if (payload.expiresAt < moment().unix()) {
    return error(req, res, "el token a expirado", 401);
  }
  next();
};
