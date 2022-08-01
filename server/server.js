const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () =>
  console.log('Mongodb connection established')
);

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');
const intakeRouter = require('./routes/intake');

app.get('/', (req, res) => {
  res.send('MERN Exercise Tracker');
})

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);
app.use('/intake', intakeRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})