import Express from "express";
import { book } from "../models/book.js";
import { checkPreferences } from "joi";
const routerbook = Express.Router();
routerbook.post("/book", async (req, res) => {
  const book = await new books(req.body).save();
  res.send({ status: true, data: book });
});
routerbook.get("/book", async (req, res) => {
  const response = await books.find();
  res.send(response);
});
routerbook.put("/books/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await books.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(response);
});
routerbook.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  const response = await books.findOneAndDelete({ _id: id });
  res.send(response);
});
export default router;
