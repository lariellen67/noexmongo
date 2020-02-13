const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

//para fazer a conexão com o mongo
mongoose.connect("mongodb://localhost:27017/noderest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
