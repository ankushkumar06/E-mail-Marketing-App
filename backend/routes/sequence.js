
const auth = require('../middleware/auth');

// Example route with authentication
router.post('/', auth, async (req, res) => {
  // Your code here


  const express = require('express');
const router = express.Router();
const Sequence = require('./models/Sequence');

// @route   POST /api/sequences
// @desc    Create a new sequence
// @access  Private
router.post('/', async (req, res) => {
  try {
    const { name, nodes } = req.body;
    const sequence = new Sequence({ name, nodes, user: req.user.id });
    await sequence.save();
    res.json(sequence);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/sequences
// @desc    Get all sequences
// @access  Private
router.get('/', async (req, res) => {
  try {
    const sequences = await Sequence.find({ user: req.user.id });
    res.json(sequences);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/sequences/:id
// @desc    Get a sequence by ID
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const sequence = await Sequence.findById(req.params.id);
    if (!sequence) {
      return res.status(404).json({ msg: 'Sequence not found' });
    }
    res.json(sequence);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/sequences/:id
// @desc    Update a sequence
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const { name, nodes } = req.body;
    let sequence = await Sequence.findById(req.params.id);
    if (!sequence) {
      return res.status(404).json({ msg: 'Sequence not found' });
    }
    sequence.name = name;
    sequence.nodes = nodes;
    await sequence.save();
    res.json(sequence);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/sequences/:id
// @desc    Delete a sequence
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    let sequence = await Sequence.findById(req.params.id);
    if (!sequence) {
      return res.status(404).json({ msg: 'Sequence not found' });
    }
    await sequence.remove();
    res.json({ msg: 'Sequence removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
});