const express = require('express');
const router = express.Router();

// Import controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    healthCheck
} = require('../controllers/userController');

// Import validation middleware
const {
    validateUser,
    validateId
} = require('../middleware/validate');

// Health check
router.get('/health', healthCheck);

// Get all users
router.get('/users', getAllUsers);

// Get user by ID
router.get('/users/:id', validateId, getUserById);

// Create user
router.post('/users', validateUser, createUser);

// Update user
router.put('/users/:id', validateId, validateUser, updateUser);

// Delete user
router.delete('/users/:id', validateId, deleteUser);

module.exports = router;