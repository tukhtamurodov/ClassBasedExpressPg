import Exception from "../exception/exception.js";

export default (err, _, res, __) => {
  if (err instanceof Exception) {
    return res.status(err.status).json({
      message: err.message,
      status: err.status,
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
    status: 500,
  });
};
