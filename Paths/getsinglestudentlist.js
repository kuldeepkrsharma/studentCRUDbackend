const User = require("../Models/User");

async function getsinglestudentlist(req, res) {
  try {
    const students = await User.findOne({ email: req.body.email });

    res.status(200).json({
      success: true,
      message: "Data retrieved successfully",
      data: students,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
}

module.exports = getsinglestudentlist;
