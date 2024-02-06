
const { Router } = require('express')

const loginRouter = Router();

const { SignupModel } = require('../Models/signup')

loginRouter.post('/login', async (req, res, next) => {
    const { email, password } = req;
    let isUserEmail = await SignupModel.find({ userEmail: email })
    if (!isUserEmail) {
        res.json('User Email is not found please signup first or check your email')
    }
})
