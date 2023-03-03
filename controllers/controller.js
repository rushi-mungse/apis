const controller = async (req, res, next) => {
  const query = req.query;
  if(query === undefined) return res.json({ message: "Someting went wrong !!!" });
  else if(query.language == "English") return res.json({ message: "Hello world" });
  else if(query.language == "French") return res.json({ message: "Bonjour le monde" });
  else if(query.language == "Hindi") return res.json({ message: "Namastey Sansar" });
  return res.json({ message: "Someting went wrong !!!" });
};

module.exports = controller;
