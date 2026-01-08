const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { ...updates, updated_at: Date.now() },
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.buildProfile = async (req, res) => {
  try {
    const {
      current_activity,
      phone,
      school_class,
      college_name,
      year_or_class,
      semester,
      interests
    } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        current_activity,
        phone,
        school_class,
        college_name,
        year_or_class: `${year_or_class} - Semester ${semester}`,
        course_summary: school_class,
        interests,
        is_new_user: false,
        updated_at: Date.now()
      },
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json({ message: 'Profile built successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};