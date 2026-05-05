const errHandle = (err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: err.message || "Server error",
  });
};

module.exports = errHandle;