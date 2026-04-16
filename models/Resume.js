const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  personalDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    title: { type: String }
  },
  summary: { type: String },
  experience: [{
    company: { type: String },
    role: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String }
  }],
  education: [{
    university: { type: String },
    degree: { type: String },
    year: { type: String }
  }],
  skills: [{ type: String }],
  themeColor: { type: String, default: '#3b82f6' }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);