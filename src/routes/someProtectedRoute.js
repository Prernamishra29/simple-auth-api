const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/profile', authenticateToken, (req, res) => {
  // Access req.user to get logged-in user info from the token
  res.json({ message: `Welcome ${req.user.email}`, userId: req.user.userId });
});

module.exports = router;
