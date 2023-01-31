const queryValidation = async (req, res, next) => {

  if(!req.params.query) {
    res.status(400).json({error: 'Invalid Search Input'});
  }

  next();
}

export default queryValidation;