const jwt = require("jsonwebtoken");
const User = require("../Models/User.js");

async function login(req, res) {
  try {
    const student = await User.findOne({
      email: req.body.email,
      pass: req.body.pass,
    });
    console.log(student);
    if (student != null) {
      const result = req.body.pass == student.pass;

      const token = jwt.sign({ userId: student.email }, process.env.SECRET_KEY);
      console.log(student);
      const studentname = student.fullname;
      if (result) {
        res.status(200).json({
          success: true,
          message: "Student registered successfully",
          data: token,
          fullname: studentname,
        });
      }
    } else {
      res.status(401).json({
        success: false,
        message: "Student not found",
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "login failed",
    });
  }
}

module.exports = login;
