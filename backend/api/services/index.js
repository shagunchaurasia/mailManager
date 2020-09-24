const mailTemplate = require("./mailTemplateService");
const mail = require("./mailService");
module.exports = {
  mailTemplateService: mailTemplate,
  mailService: mail,
};
