import express from 'express'
import bcrypt from 'bcryptjs'

import mysql from 'mysql2'
import util from 'util'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import cookieParser from 'cookie-parser'

env.config()
import { generateAccessToken , generateRefreshToken , verifyAuth } from '../middleware/authJWT.js'

import db from '../config/database.js'

// files
import userController from '../controller/user.controller.js'
import loanController from '../controller/loan.controller.js'
import adminController from '../controller/admin.controller.js'
import repaymentController from '../controller/repayments.controller.js'

import userModel from '../model/user.model.js'
import loanModel from '../model/loan.model.js'
import adminModel from '../model/admin.model.js'
import repaymentModel from '../model/repayments.model.js'



export {express , env , bcrypt , userController , userModel , loanController , loanModel , util , mysql , db , jwt , generateAccessToken , generateRefreshToken , verifyAuth , adminModel , cookieParser , adminController , repaymentModel , repaymentController }
