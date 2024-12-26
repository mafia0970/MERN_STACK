const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { Username, Email, Password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(Password, 12);
    const user = new User({
      Username,
      Email,
      Password: hashPassword,
    });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Registration Successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { register };
