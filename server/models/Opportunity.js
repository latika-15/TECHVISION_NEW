const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Job', 'Hackathon', 'Internship', 'Competition'],
    required: true 
  },
  interest_area: { 
    type: String, 
    enum: ['Software Development', 'Data Science', 'Marketing', 'Design', 'Business', 'AI/ML', 'Cybersecurity', 'Cloud Computing'],
    required: true 
  },
  location: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  link: { type: String },
  created_at: { type: Date, default: Date.now },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Opportunity', opportunitySchema);