import { Router } from "express";
import * as SettingsController from '../controllers/settings.js';
import { verifyAdmin } from '../middlewares/auth.js'

const router = new Router();

router.patch('/register/toggle', SettingsController.ToggleRegister);
// router.patch('/register/toggle', verifyAdmin, SettingsController.ToggleRegister);

// router.patch('/register/allow', verifyAdmin, SettingsController.AllowRegister);
// router.patch('/register/prevent', verifyAdmin, SettingsController.PreventRegister);
router.patch('/status/check', verifyAdmin, SettingsController.CheckStatus);
router.patch('/user/disable', verifyAdmin, SettingsController.DisableUserLogin);

export default router