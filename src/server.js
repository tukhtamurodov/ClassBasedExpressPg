import express, { json } from "express";
import cors from "cors";
import routes from "./module/routes.js";
import exceptionHandler from "./middleware/exception-handler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(exceptionHandler);

app.listen(9090, console.log(9090));
