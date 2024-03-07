const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const app = express();


// Database Connection
mongoose.connect(process.env.MONG_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database Connection Failed', err))

//Middlewares
app.use(express.json())


app.use('/', require('./routes/authRoutes'))
 

const port = 8000;
app.listen(port, () => 
  console.log(`Server is running on port ${port}`))
