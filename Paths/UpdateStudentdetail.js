const User = require("../Models/User");

async function UpdateStudentdetail(req, res) {
  console.log("req.body", req.body);

  try {
    const updatedstudent = await User.findOneAndUpdate(
      { email: req.body.email },
      req.body,
    );
    const updatedstudent2 = await User.findOne(
      { email: req.body.email },
      req.body,
    );

    res.status(200).json({
      success: true,
      message: {
        data: updatedstudent2,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = UpdateStudentdetail;
