const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['SendEmail', 'Wait', 'Decision'],
    required: true,
  },
  parameters: {
    // Define parameters based on node type
    // For example, email content, wait duration, decision conditions, etc.
  },
});

module.exports = mongoose.model('Node', NodeSchema);