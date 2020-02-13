const express = require("express");
const authorization = require("../middlewares/authorization");

const router = express.Router();

router.use(authorization);

router.get("/", (req, res) => {
  res.send({ message: "ok", user: req.userId });
});

module.exports = app => app.use("/signed", router);
