const express = require("express");
const {
  validateRuleController, getUser,
} = require("../controllers/validate-rule-controller");
const { validatorWare } = require("../middlewares/validator-ware");
const router = express.Router();

router.get("/", getUser)

router.post("/validate-rule", validatorWare, validateRuleController);

module.exports = router;
