const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const resumeRoutes = require('./routes/resume');

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/resumes', resumeRoutes);

// --- DEPLOYMENT CONFIGURATION ---
const __dirname_root = path.resolve();

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app dist folder
  app.use(express.static(path.join(__dirname_root, 'frontend', 'dist')));

  // For any request that doesn't match an API route, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname_root, 'frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'Resume Builder API is running' });
  });
}
// --------------------------------

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/resume-builder')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.warn('⚠️ MongoDB connection error. The server will run in "offline" mode (data will not be saved).');
    console.error('Error details:', err.message);
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (Disconnected from MongoDB)`);
    });
  });