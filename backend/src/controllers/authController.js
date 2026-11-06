const pool = require('../../db'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User (Jo pehle se hai, waisa hi rahega)
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, role',
      [name, email, hashedPassword]
    );

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

// NAYA CODE: Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check karein ke user database mein hai ya nahi
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // 2. Password match karein (jo user ne dala hai vs jo db mein hash hai)
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // 3. Naya Token banayein
    const token = jwt.sign(
      { id: user.rows[0].id, role: user.rows[0].role }, 
      process.env.JWT_SECRET || 'secret_key_123', 
      { expiresIn: '1d' }
    );

    // 4. Response bhejein (Password ko response mein na bhejein)
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email,
        role: user.rows[0].role
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Dono functions export karein
module.exports = { registerUser, loginUser };