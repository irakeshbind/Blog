const express = require('express')
const app = express()

const userRoute = require('./routes/user');
const cateRoute = require('./routes/category');
const bloRoute = require('./routes/blog')
const commentRoute = require('./routes/comment')


app.use('/user',userRoute)
app.use('/category',cateRoute)
app.use('/blog',bloRoute)
app.use('/camment',commentRoute)


module.exports = app; 