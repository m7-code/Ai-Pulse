// Yahan '../../db' kar diya hai taake yeh src se bahar nikal kar db.js ko dhoond sake
const pool = require('../../db'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Check karein ke email pehle se toh nahi hai
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Password ko hash (encrypt) karein
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Database mein naya user save karein
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, role',
      [name, email, hashedPassword]
    );

    // 4. Token banayein
    const token = jwt.sign({ id: newUser.rows[0].id, role: newUser.rows[0].role }, process.env.JWT_SECRET || 'secret_key_123', { expiresIn: '1d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: newUser.rows[0]
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { registerUser };