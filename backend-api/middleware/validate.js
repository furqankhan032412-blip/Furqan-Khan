const userModel = require('../models/userModel');

const validateUser = (req, res, next) => {
    const { name, email, age, role } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: 'Name and email are required fields',
            errors: {
                name: !name ? 'Name is required' : undefined,
                email: !email ? 'Email is required' : undefined
            }
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format',
            errors: { email: 'Please provide a valid email address' }
        });
    }

    if (age !== undefined && age !== null) {
        if (typeof age !== 'number' || age < 0 || age > 150) {
            return res.status(400).json({
                success: false,
                message: 'Invalid age value',
                errors: { age: 'Age must be a number between 0 and 150' }
            });
        }
    }

    if (role !== undefined && role !== null) {
        const validRoles = ['Developer', 'Designer', 'Manager', 'Intern', 'Admin'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid role',
                errors: { role: `Role must be one of: ${validRoles.join(', ')}` }
            });
        }
    }

    next();
};

const validateId = (req, res, next) => {
    const { id } = req.params;
    
    if (!id || isNaN(parseInt(id))) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID format',
            errors: { id: 'ID must be a valid number' }
        });
    }
    next();
};

module.exports = {
    validateUser,
    validateId
};