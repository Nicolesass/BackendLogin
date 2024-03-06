const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');

// Database Connection
mongoose.connect(process.env.MONG_URL)
.then(() => console.log('Database Connected'))
.catch(() => console.log('Database Connection Failed', err))

const app = express();

app.use('/',require('./routes/authRoutes'))
 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});