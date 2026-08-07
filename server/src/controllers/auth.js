import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    const { firstName, lastName, username, email, phone, dob, gender, password } = req.body;

    if (!firstName || !lastName || !username || !email || !phone || !dob || !gender || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'A user with that username or email already exists',
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      phone,
      dob: new Date(dob),
      gender,
      password,
    });

    return res.status(201).json({
      success: true,
      message: 'User registered',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        gender: user.gender,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Registration failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'identifier and password are required',
      });
    }

    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    return res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        gender: user.gender,
      },
      token: 'TODO-generate-real-jwt',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Login failed' });
  }
};