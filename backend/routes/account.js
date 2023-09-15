import { Router } from "express";
import * as AccountController from '../controllers/account.js';
import { RegisterSchema, LoginSchema } from '../schema/account.js';
import Validation from '../middlewares/validation.js'
import { verifyAdmin } from '../middlewares/auth.js'
import { checkEnabledRegistration } from "../middlewares/dbCheck.js";

const router = new Router();

router.post('/login', Validation(LoginSchema, 'body'), AccountController.Login);

// router.post('/register', Validation(RegisterSchema, 'body'), AccountController.Register);
// router.post('/register', checkEnabledRegistration, verifyAdmin, Validation(RegisterSchema, 'body'), AccountController.Register);
router.post('/register', checkEnabledRegistration, Validation(RegisterSchema, 'body'), AccountController.Register);

export default router;