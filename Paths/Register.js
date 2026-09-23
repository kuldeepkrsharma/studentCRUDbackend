
const User = require("../Models/User.js");

async function register(req, res) {
  try {
    const student = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: student,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
}

module.exports = register;