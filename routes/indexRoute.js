//import files
const auth = require('../services/auth');

//import modules
const router = require('express').Router();

router.get('/', (req,res)=> {
    res.send('Hello World')
})

router.post('/register', async (req,res)=> {
    return await auth.register(req,res);
})

router.post('/login', async (req,res)=> {
    return await auth.login(req,res);
})

module.exports = router