const userModel = require('../models/userModel');

// GET all users
const getAllUsers = (req, res) => {
    try {
        const users = userModel.findAll();
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching users',
            error: error.message
        });
    }
};

// GET user by ID
const getUserById = (req, res) => {
    try {
        const { id } = req.params;
        const user = userModel.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User with ID ${id} not found`
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user',
            error: error.message
        });
    }
};

// POST create user
const createUser = (req, res) => {
    try {
        const { name, email, age, role } = req.body;
        
        const existingUser = userModel.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this email already exists',
                errors: { email: 'Email must be unique' }
            });
        }
        
        const newUser = userModel.create({
            name,
            email,
            age: age || null,
            role: role || 'Intern'
        });
        
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error.message
        });
    }
};

// PUT update user
const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age, role } = req.body;
        
        const existingUser = userModel.findById(id);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: `User with ID ${id} not found`
            });
        }
        
        if (email) {
            const userWithEmail = userModel.findByEmail(email);
            if (userWithEmail && userWithEmail.id !== parseInt(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already in use by another user',
                    errors: { email: 'Email must be unique' }
                });
            }
        }
        
        const updatedUser = userModel.update(id, {
            name: name || existingUser.name,
            email: email || existingUser.email,
            age: age !== undefined ? age : existingUser.age,
            role: role || existingUser.role
        });
        
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
};

// DELETE user
const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        
        const existingUser = userModel.findById(id);
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: `User with ID ${id} not found`
            });
        }
        
        userModel.delete(id);
        
        res.status(200).json({
            success: true,
            message: `User with ID ${id} deleted successfully`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
};

// Health check
const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    healthCheck
};