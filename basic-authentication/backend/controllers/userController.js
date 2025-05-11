
import {User} from '../models/users.js'

export const userReg =async (req , res) => {
   const {username , email , password} = req.body
    const user = new User({username , email , password} )
    await user.save()
   
}