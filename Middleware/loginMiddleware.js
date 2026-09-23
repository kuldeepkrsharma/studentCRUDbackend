const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // console.log("log", authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Token required",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, userdata) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid or expired token",
      });
    }
    // console.log(userdata);
    req.userdata = userdata;

    next();
  });
}

module.exports = authenticateToken;
