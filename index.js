const express = require('express');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const {SendError} = require('./services/error');
 
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


const indexRouter = require('./routes/indexRoute')


app.use('/', indexRouter)


const link = `mongodb+srv://techsyndicate:${process.env.MONGO_PASS}@cluster0.lfkkma3.mongodb.net/?retryWrites=true&w=majority`

app.use((err, req,res,next)=> {  
    SendError(err.stack.toString());
    SendError('The Server has crashed')
    next(err)
})

const PORT = process.env.PORT || 3000;

mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log('MongoDB connected')
    SendError('MongoDB Connected')
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        SendError(`Server started on port ${PORT}`)
    })
}).catch((err)=> {
    SendError(err.stack.toString());
    SendError('The Server has crashed')
    console.log(err)
})

