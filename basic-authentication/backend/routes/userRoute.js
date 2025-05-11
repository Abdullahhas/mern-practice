import express from "express"
const router = express.Router()
import { userReg } from "../controllers/userController.js"

router.post('/api/register' , userReg )


export default router;
