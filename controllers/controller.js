const controller = async (req, res, next) => {
  const query = req.query.language.toLowerCase();
  
  if(query === "english") return res.send(`<h1 style = "color : blue;">Hello Word</h1>`)
  else if(query === "french") return res.send(`<h1 style = "color : green;">Bonjour le monde</h1>`);
  else if(query === "hindi") return res.send(`<h1 style = "color : orange;">Namastey Sansar</h1>`);
  return res.send(`<h1 style = "color : red;">Something went wrong!!!</h1>`);
};

module.exports = controller;
