const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  file_name: { type: String, required: true },
  file_path: { type: String, required: true },
  file_type: { type: String },
  file_size: { type: Number },
  upload_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);