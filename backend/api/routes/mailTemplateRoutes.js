const router = require("express").Router();
const mailTemplateController = require("../controllers/mailTemplateController");
const validationJoiMiddleware = require("../middleware/validationJoi");
const joiSchemas = require("../models/joiSchemas");
const {
  protectMiddleware,
  authorizeRolesRoutes,
} = require("./../middleware/authMiddleware");

// get all mails
router.get(
  "",
  // protectMiddleware,
  // authorizeRolesRoutes("user"),
  mailTemplateController.fetchAll
);

// create mail template
router.post(
  "",
  // validationJoiMiddleware(joiSchemas.mailTemplateSchema, "body"),
  // protectMiddleware,
  // authorizeRolesRoutes("user"),
  mailTemplateController.create
);

// update mail
router.put(
  "/:mailId",
  validationJoiMiddleware(joiSchemas.mailTemplateSchema, "body"),
  protectMiddleware,
  authorizeRolesRoutes("user"),
  mailTemplateController.update
);

// Delete mail
router.delete(
  "/",
  validationJoiMiddleware(joiSchemas.mailIdSchema, "body"),
  protectMiddleware,
  authorizeRolesRoutes("user"),
  mailTemplateController.delete
);

module.exports = router;
