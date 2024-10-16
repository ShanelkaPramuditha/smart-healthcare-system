import { USER_ROLES } from '../constants/constants.js';
import { getDoctors, getProfile, getUsers, register } from '../services/user.service.js';

const UserController = {
  // Register a new user
  // Anyone can register
  register: async (req, res) => {
    try {
      const user = await register(req.body);

      // If the user is created successfully, return a 201 status code
      if (user) {
        return res.status(201).json({ message: 'Registration successful' });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get user profile details
  // Only authenticated users can access
  profile: async (req, res) => {
    try {
      const user = await getProfile(req.user.id);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get all users
  // Only authenticated users can access
  getUsers: async (req, res) => {
    try {
      const { role } = req.query;
      const users = await getUsers(role);

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get all doctors
  // Anyone can access
  getDoctors: async (req, res) => {
    try {
      const doctors = await getDoctors();

      return res.status(200).json(doctors);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export default UserController;
