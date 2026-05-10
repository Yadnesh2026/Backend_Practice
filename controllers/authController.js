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

  //Find the user if he exist or not 
  const findUser = await User.findOne({ email });

  //Checks if the user or email id matchs or not 
  if (!findUser) {
    return res.status(400).json({ message: "You are not registered" });
  }

  //Check if the email id matchs the password or not 
  if(password !== findUser.password){
    return res.status(400).json({message:"The password does not match the user"});
  }else{
    return res.status(200).json({message:"Login Successfull"});
  }
};

module.exports = {register,login};
