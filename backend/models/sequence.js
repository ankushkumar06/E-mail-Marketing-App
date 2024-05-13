const mongoose = require('mongoose');

const SequenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Node',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Sequence', SequenceSchema);