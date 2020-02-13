const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

module.exports = (req, res, next) => {
  const token = req.headers.auth;

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });
    req.userId = decoded.id;
    return next();
  });
};
