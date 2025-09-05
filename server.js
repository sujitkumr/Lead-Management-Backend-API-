const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const leadRoutes = require('./routes/LeadRoutes');
const connectDB = require('./config/Database');


connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/leads', leadRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Lead Management API is working!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  }).on('error', (err) => {
    console.error('Error starting server:', err.message);
  });
  