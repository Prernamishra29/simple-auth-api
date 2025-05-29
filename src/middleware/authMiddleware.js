const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];  // Expected: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1]; // Extract token

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach decoded user info to request object
    next();  // Proceed to next middleware/route handler
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
}

module.exports = authenticateToken;
