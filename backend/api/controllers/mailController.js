const mailService = require("../services").mailService;
const mailConfigTransporter = require("./../config/mailConfig");
const asyncHandler = require("../middleware/asyncMiddleware");
const { prepareResponse } = require("../util/responseParserUtility");
const { fetchTemplateByName } = require("../services").mailTemplateService;
let Obj = {};

Obj.fetchAll = asyncHandler(async (request, response, next) => {
  let mailData = await mailService.fetchAll(request.modifiedQuery);
  prepareResponse(response, mailData);
});

Obj.sendMail = asyncHandler(async (request, response, next) => {
  console.log("reached here inside sendMail");
  console.log("mailConfigTransporter");
  // console.log(mailConfigTransporter);

  console.log(request.body);
  // return false;
  let flow = "OUT";
  let subject = request.body;
  let messageBody = request.body.messageBody;
  let mailCC = request.body.mailCC;
  let mailBCC = request.body.mailBCC;
  let mailTo = request.body.mailTo;
  let mailTemplateName = request.body.mailTemplateName;

  var mailOptions;

  if (mailTemplateName != "") {
    const templateName = await fetchTemplateByName(mailTemplateName);
    console.log("templateName");
    console.log(templateName);
    //Fetch mail template
    let mailTemplateResponse = {};
    mailTo = mailTemplateResponse.mailTo;
    mailCC = mailTemplateResponse.mailCC;
    mailBCC = mailTemplateResponse.mailBCC;
    subject = mailTemplateResponse.subject;
    messageBody =
      mailTemplateResponse.mailBody +
      "<br><br>" +
      mailTemplateResponse.signature;

    // mailConfigTransporter.sendMail({
    //   from: '"Yojana Setu 👻" <yojanasetu@gmail.com>',
    //   to: "chaurasia.shagun@gmail.com,rahulrajput18@gmail.com", // list of receivers
    //   subject: "Hello Test ✔ " + Date.now(), // Subject line
    //   text: "Hello world?", // plain text body
    //   html: "<b>Hello world?</b>",
    // });
  }

  mailOptions = {
    to: mailTo,
    cc: mailCC,
    bcc: mailBCC,
    html: messageBody,
    subject: subject,
  };

  mailConfigTransporter.sendMail({
    from: '"Kiba LMP " <kiba@gmail.com>',
    to: "chaurasia.shagun@gmail.com", // list of receivers
    subject: "Shot from Kiba UI ✔ " + Date.now(), // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  });

  let data = request.body;
  let createMail = mailService.create(data);
  let mailResponse = await createMail;
  // response.json({ message: "Sent" });
  prepareResponse(response, mailResponse);
  next();
});

module.exports = Obj;
