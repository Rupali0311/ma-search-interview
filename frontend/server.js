const express = require('express')
const app = express()
const { connect, model, Schema } = require('mongoose');

const PORT = 3000;

const Contact = model('Contact', new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  dateAdded: {
    type: Date,
    default: Date.now,
  },
}));

connect('mongodb://mongo:27017', { useNewUrlParser: true });

app.get('/api', (req, res) => {
  res.json({});
});

app.listen(PORT, () => console.log('API is running'));
