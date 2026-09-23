const User = require("../Models/User");

async function Deletestudent(req, res) {
  const email = req.params.email;

  try {
    const student = await User.findOne({ email: email });

    if (student != null) {
      const result = await User.deleteOne({ email: email });

      if (result) {
        res.status(200).json({
          success: true,
          message: "Student deleted successfully",
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

    res.status(200).json({
      success: true,
      error: error,
    });
  }
}

module.exports = Deletestudent;
