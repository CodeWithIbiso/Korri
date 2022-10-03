import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'


const SECRET_KEY='SECRET_KEY'

export const signin = async(req,res)=>{
    const {email,password} = req.body   
    //  console.log(req.body)

    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(404).json({message:404})
        // if(!existingUser) return res.status(404).json({message:'User doesnt exist'})
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect) return res.status(401).json({message:401})
        // if(!isPasswordCorrect) return res.status(401).json({message:'Invalid credentials'})

        const token = jwt.sign({email:existingUser,id:existingUser._id},SECRET_KEY,{expiresIn:'1hr'})
        res.status(200).json({result: existingUser,token})
    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
}

export const signup = async(req,res)=>{
    const {firstName,lastName,email,password,contact,confirmPassword} = req.body
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({message:'user already exist'})
        if(password !== confirmPassword) return res.status(400).json({message:'passswords dont match'})
        
        const hashedPassword = await bcrypt.hash(password,12)
        const toSave = {email,password:hashedPassword,contact,name:`${firstName} ${lastName}`}
        // console.log(toSave)
        const result = await User.create(toSave)
        const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY,{expiresIn:'1hr'})
        res.status(200).json({result,token})
    } catch (error) {
        res.status(500).json({message:'something went wrong'})
        
    }
}












