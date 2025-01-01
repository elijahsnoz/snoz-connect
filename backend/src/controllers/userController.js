const User = require('../models/user');

exports.getUser = async (req, res) => {
  try {
    const { stacksAddress } = req.params;
    const user = await User.findOne({ stacksAddress });
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
