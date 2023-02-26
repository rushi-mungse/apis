const registerController = async (req, res, next) => {
  console.log(req.body);

  res.json({ message: "we are pro in this field!!!" });
};

module.exports = registerController;
