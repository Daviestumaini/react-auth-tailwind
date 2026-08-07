import User from '../models/User.js';

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
