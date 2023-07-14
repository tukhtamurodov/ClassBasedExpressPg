import Exception from "../../exception/exception.js";
import errorCall from "../../utils/errorCall.js";
import productModel from "./book.model.js";

class productController {
  async GET(req, res, next) {
    const allBooks = await productModel.getAll().catch(errorCall(next));
    if (allBooks) return res.json(allBooks);
  }
  async POST(req, res, next) {
    const { name, descrip, author } = req.body;
    const book = await productModel
      .post(name, descrip, author)
      .catch((err) => next(new Exception(err.message, 400)));

    if (book?.[0]) return res.json(book?.[0]);
  }
}

export default new productController();
