import express from "express";

const router = express.Router()

// @desc    Login page
// @route   GET /
router.get('/', (req, res) => {
    res.render('login', { layout: 'login' })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


export default router;
