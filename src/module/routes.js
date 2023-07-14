import { Router } from "express";
import bookRoute from "./product/book.route.js";

const route = Router();

export default route.use("/books", bookRoute);
