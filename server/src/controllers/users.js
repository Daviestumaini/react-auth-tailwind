import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, phone, dob, gender, password } = req.body;

    if (!firstName || !lastName || !username || !email || !phone || !dob || !gender || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User already exists' });
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

    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to create user' });
  }
};

export const getUsers = async (_req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to fetch users' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || 'Failed to fetch user' });
  }
};
