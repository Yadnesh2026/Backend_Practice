const User = require("../models/User");


//register user
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "The user is already Registered" });
  }

  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
  });

res.status(201).json({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email
});
};


module.exports = register;
