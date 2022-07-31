const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if(err) throw err;
  console.log('Connected to mongodb')
})

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})