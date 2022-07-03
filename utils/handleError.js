const handleHttpError = (res, message="Ups parece que algo ha fallado", code=403 ) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };