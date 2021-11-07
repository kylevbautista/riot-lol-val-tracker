if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  console.log("going into dev store");
  module.exports = require("./configureStore.dev");
}
