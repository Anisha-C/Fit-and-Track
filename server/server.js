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
  useUnifiedTopology: true
});

const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');

app.use('/workouts', workoutsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})