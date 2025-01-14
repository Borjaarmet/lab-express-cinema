const mongoose = require('mongoose');

const DB_NAME = 'express-cinema'

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
