module.exports.how = () => {
  console.log('how ? called');
};

module.exports.sup = (req, res, next) => {
  console.log('sup ? called', req.methods);
  next();
};