import Exception from "../exception/exception.js";

export default (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return next(new Exception(error.message, 433));
  }

  next();
};
