
import {User} from '../models/users.js'
import { gentoken } from '../libs/jwtToken.js'

export const userReg =async (req , res) => {
   const {username , email , password} = req.body
    const user = new User({username , email , password} )
    await user.save()
    const token = gentoken(user._id, res);
    res.status(201).json({ message: "User registered successfully", user , token }); 
  

   
}

