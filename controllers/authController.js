const User = require("../models/User");

//register user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  //user should entered all the fields name,email and password
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "You have not entered all the fields" });
  }

  //this sees if the user is already registred or not
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
    email: newUser.email,
  });
};

//Login User
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Enter the Feilds Correctly" });
  }

  const findUser = await User.findOne({email});

  if(!findUser){
    res.status(400).json({message:"You are not registered"})

    res.redirect
  }



};

module.exports = register;
