const { responseGen } = require("../utils/response-gen");


exports.validateRuleController = (req, res, next) => {
  try {
    const { message, status, respData } = req;
    return res.status(200).json(responseGen(message, status, respData));
  } catch (error) {
    return next();
  }
};


exports.getUser = async(req, res) =>{
  res.status(200).json({
      message: "My Rule-Validation API",
      status: "Success",
      data: {
        "name": "Lutor Ayangaor",
        "github": "@lutitech",
        "email": "lutor4148@gmail.com",
        "mobile": "08079398930",
        "twitter": "@lutor4148"
    }
  })
}