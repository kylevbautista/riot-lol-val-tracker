if (process.env.NODE_ENV === "production") {
  console.log("production store");
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
