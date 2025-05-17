import express from "express"
const router = express.Router()
import { userReg , authCheck , userLogin } from "../controllers/userController.js"
import {isAuth} from '../middlewares/auth.js'

router.post('/register' , userReg )
router.get("/current-user", isAuth, authCheck)
router.post('/login' ,userLogin )


export default router;
