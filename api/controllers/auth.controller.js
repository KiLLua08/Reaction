import User from '../models/User.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

const signup = async (req,res,next) => {
   const {username, email, password} = req.body;

   if (!username || !email || !password || username ==='' || email ==='' || password ==='') {
    next(errorHandler(400, 'All fields are required'))
   }

   const hashedpassword = await bcryptjs.hash(String(password), 10);

   const newUser = new User({
    username,
    email,
    password: hashedpassword,
   })

   try {
     await newUser.save();
     res.json({message: 'Signup successfully'})
   } catch (error) {
     next(error);
   }
} 

export default signup