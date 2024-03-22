require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connect to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Start Express Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
