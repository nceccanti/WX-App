const asyncHandler = require("express-async-handler")

const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get user'})
})

const createUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'create user'})
})

const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update user ${req.params.id}`})
})

const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`})
})

module.exports = {
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
}