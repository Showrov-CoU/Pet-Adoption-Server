require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connection");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const main = async (req, res) => {
  await connectDB();
  server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};
 
main();
