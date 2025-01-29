const express = require('express');
const router = express.Router();

// POST /register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ 
                error: 'All fields (name, email, password) are required' 
            });
        }
        const user = {
            name,
            email,
            password 
        };

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: 'simulated_id',
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;