import mongoose from "mongoose";
import User  from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken"
;


export const register = async(req, res, next) => {
   
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash})
console.log(newUser)
        await newUser.save()
        res.status(200).json("User has been created!")
    } catch(err) {
        next(err)
    }
}

export const login = async(req, res, next) => {

    try{
        const user = await User.findOne({userName: req.body.userName})
        if(!user) return next(createError(404, "User not found!"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, "Wrong credential"))

        const token = jwt.sign({id: user._id}, process.env.JWT)
        const {password, ...others} = user._doc

        res.cookie("access_token", token, {
            httpOnly: true
        })
        .status(200)
        .json(others)

    } catch(err) {
        next(err)
    }
}