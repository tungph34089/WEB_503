import express from "express";
import router from "./router/product.js";
import connectdb from "./database/connect.js";
import book from "./router/book.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", router);
app.use("/api", routerbook);
app.listen(port, async () => {
  await connectdb();
  console.log(`Endpoint http://localhost:${port}/api/products`);
});
