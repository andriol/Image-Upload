const express = require("express");
const app = express();
const imageRouter = require("./routes/image-route");

app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;
app.use("/", imageRouter);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
