import { Router } from "express";
import controller from "./book.controller.js";
import validationHandler from "../../middleware/validation-handler.js";
import { postProduct } from "../../validator/product.scheme.js";

const route = Router();

export default route
  .get("/", controller.GET)
  .post("/", validationHandler(postProduct), controller.POST);
