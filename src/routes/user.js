import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isAdminOrModerator } from "../middlewares/verify_roles";

const router = express.Router();

//PUBLIC ROUTES


//PRIVATE ROUTES
router.use(verifyToken)
router.use(isAdmin)
router.get('/', controllers.getCurrent)  

module.exports = router