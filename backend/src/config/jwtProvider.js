const jwt = require("jsonwebtoken");

const SECRET_KEY = "jadjkabjfbuqhdjnsdjnajsndmahjshdmah";

const generateToken = (UserId) => {
  const token = jwt.sign({ UserId }, SECRET_KEY, { expiresIn: "48h" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.UserId;
};

module.exports = { generateToken, getUserIdFromToken };
