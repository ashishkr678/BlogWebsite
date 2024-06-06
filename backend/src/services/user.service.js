const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, username, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User Already Exist With Email : ", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, username, email, password });

    console.log("Created User ", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async(userId) => {
  try {
    const user = await User.findById(userId);
  
    if (!user) {
      throw new Error("User Not Found With Id : ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User Not Found With Id : ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserProfileByToken,
};
