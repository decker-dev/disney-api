import {Router} from 'express'
import * as authCtrls from "../controller/auth.controller";
import {check} from 'express-validator'
const router=Router();

router.post("/register",[
    check('email','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
], authCtrls.register);
export default router