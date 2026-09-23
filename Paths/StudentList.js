const User = require("../Models/User");

async function studentlist(req, res) {
  const listnumber = req.params.listnumber;
  try {
    const students = await User.find()
      .limit(20)
      .skip((listnumber - 1) * 20);

    const studentscount = await User.countDocuments();
    res.status(200).json({
      success: true,
      message: {
        data: students,
        studentscount: studentscount,
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

module.exports = studentlist;
