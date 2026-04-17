const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

router.post('/', async (req, res) => {
  try {
    const resume = new Resume(req.body);
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json(resume);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;