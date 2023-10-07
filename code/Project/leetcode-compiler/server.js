const express = require('express');

//networking
const app = express();
const PORT ='3000';

//routing
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin')

//Routes 
    //Users
app.use('/user',userRouter);
    //admin
app.use('/admin',adminRouter);


// Socket at PORT=3000 is opened for receving requests messages
app.listen(PORT,()=>{
    console.log(`Server is live on Port:${PORT}`);
})