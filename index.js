const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "dist")));
}

app.listen({ port: 4000 }, () => {
  console.log("🚀 Server ready at 4000 port");
});
