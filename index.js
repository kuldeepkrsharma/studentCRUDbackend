const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const Testget = require("./Paths/Testget");
const Login = require("./Paths/Login");
const register = require("./Paths/Register");
const authenticateToken = require("./Middleware/loginMiddleware");
const studentlist = require("./Paths/StudentList");
const UpdateStudentdetail = require("./Paths/UpdateStudentdetail");
const getsinglestudentlist = require("./Paths/getsinglestudentlist");
const Deletestudent = require("./Paths/Deletestudent");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGOSE_URI = process.env.MONGOSE_URI;

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGOSE_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.post("/testdata", authenticateToken, (req, res) => {
  Testget(req, res);
});

app.delete("/Deletestudent/:email", authenticateToken, (req, res) => {
  Deletestudent(req, res);
});

app.get("/studentlist/:listnumber", authenticateToken, (req, res) => {
  studentlist(req, res);
});

app.post("/getsinglestudentlist", authenticateToken, (req, res) => {
  getsinglestudentlist(req, res);
});

app.post("/UpdateStudentdetail", authenticateToken, (req, res) => {
  UpdateStudentdetail(req, res);
});

app.post("/register", async (req, res) => {
  register(req, res);
});

app.post("/login", async (req, res) => {
  Login(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
