const mongoose = require('mongoose');
const Resume = require('./models/Resume');

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    if (req.url === '/api/health' && req.method === 'GET') {
      return res.status(200).json({ status: 'ok', message: 'API is running' });
    }

    if (req.url === '/api/resumes' && req.method === 'POST') {
      const resume = new Resume(req.body);
      const savedResume = await resume.save();
      return res.status(201).json(savedResume);
    }

    if (req.url.startsWith('/api/resumes/') && req.method === 'GET') {
      const id = req.url.split('/')[3];
      const resume = await Resume.findById(id);
      if (!resume) {
        return res.status(404).json({ error: 'Resume not found' });
      }
      return res.status(200).json(resume);
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};