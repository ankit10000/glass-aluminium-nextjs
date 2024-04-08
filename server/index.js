const express = require('express');
const app = express();
const routes = require('./router/routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());

// Use the router middleware
app.use('/', routes);
mongoose.connect(process.env.MONGODB)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
