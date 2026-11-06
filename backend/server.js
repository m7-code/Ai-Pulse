const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

// Routes Import Karein (Yahan src add kar diya hai)
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json()); 

// Routes Use Karein
app.use('/api/auth', authRoutes); // Yahan route connect hua

app.get('/', (req, res) => {
  res.send('AI Pulse Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});