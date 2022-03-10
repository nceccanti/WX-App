const asyncHandler = require("express-async-handler")
const User = require('../models/user.model')

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

const createUser = asyncHandler(async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json(user)
})

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedUser)
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
}