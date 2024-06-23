const jwt = require("jsonwebtoken");
require('dotenv').config({path: 'src/.env'})

const generateToken = (UserId) => {
  const token = jwt.sign({ UserId }, `${process.env.SECRET_KEY}`, { expiresIn: "48h" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, `${process.env.SECRET_KEY}`);
  return decodedToken.UserId;
};

module.exports = { generateToken, getUserIdFromToken };
