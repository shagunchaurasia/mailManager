const router = require("express").Router();
const mailController = require("./../controllers/mailController");
const validationJoiMiddleware = require("../middleware/validationJoi");
const joiSchemas = require("../models/joiSchemas");
const {
  protectMiddleware,
  authorizeRolesRoutes,
} = require("./../middleware/authMiddleware");

router.get(
  "",
  // protectMiddleware,
  // authorizeRolesRoutes("user"),
  mailController.fetchAll
);

router.post("", mailController.sendMail);

module.exports = router;
