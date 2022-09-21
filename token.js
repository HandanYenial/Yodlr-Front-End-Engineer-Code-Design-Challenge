const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./helpers/config");

/** return signed JWT from user data. */

function createToken(user) {
  console.assert(user.isAdmin !== undefined,
      "createToken passed user without isAdmin property");

  let payload = {
    id: user.id,
  };

  return jwt.sign(payload, SECRET_KEY);
}

module.exports = { createToken };
