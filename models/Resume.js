const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  personalDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    title: { type: String }
  },
  profileImage: { type: String },
  template: { type: String, default: 'classic' },
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
  themeColor: { type: String, default: '#6366f1' },
  headingColor: { type: String, default: '#0f172a' },
  textColor: { type: String, default: '#475569' },
  fontSize: { type: Number, default: 16 },
  fontFamily: { type: String, default: "'Outfit', sans-serif" }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);