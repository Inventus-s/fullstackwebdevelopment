// server.js
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
require('./config/auth')(passport);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
