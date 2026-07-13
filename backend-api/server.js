const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Home
app.get('/', (req, res) => {
    res.json({
        message: '🚀 API Server is running!',
        version: '1.0.0',
        endpoints: {
            users: '/api/users',
            userById: '/api/users/:id',
            health: '/api/health'
        }
    });
});

// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.url} not found`
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}/`);
    console.log(`👥 Users endpoint: http://localhost:${PORT}/api/users`);
});