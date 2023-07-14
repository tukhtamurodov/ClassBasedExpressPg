import Exception from "../exception/exception.js";

export default (next) => (err) => {
  return next(new Exception(err.message, 500));
};
