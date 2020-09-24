// const authService = require("../services").auth;
const mailTemplateService = require("../services").mailTemplateService;
const asyncHandler = require("../middleware/asyncMiddleware");
const ErrorHandlerUtility = require("../util/errorHandlerUtility");
const { prepareResponse } = require("../util/responseParserUtility");
// const constants = require("../lib/constants");

let Obj = {};

Obj.fetchAll = asyncHandler(async (request, response, next) => {
  let mailData = await mailTemplateService.fetchAll(request.modifiedQuery);
  prepareResponse(response, mailData);
});

Obj.create = asyncHandler(async (request, response, next) => {
  let data = request.body;
  let createMail = mailTemplateService.create(data);
  let mailRes = await createMail;
  prepareResponse(response, mailRes);
  next();
});

Obj.update = asyncHandler(async (request, response, next) => {
  let data = request.body;
  //Updating mail
  let updateMail = mailTemplateService.update(data, request.params.mailId);
  let mailRes = await updateMail;
  prepareResponse(response, mailRes);
});

Obj.delete = asyncHandler(async (request, response, next) => {
  let data = request.body;
  // Delete all the cities related to this mailId
  let deleteMail = await mailTemplateService.delete(data);
  prepareResponse(response, deleteMail);
});

Object.selectTemplate = asyncHandler(async (request, response, next) => {
  let { templateName } = request.body;

  if (!templateName) {
    return next(new ErrorHandlerUtility("Template Id is not defined", 401));
  }

  let templateData = await mailTemplateService.fetchTemplateByName(
    templateName
  );
  prepareResponse(response, templateData);
});
module.exports = Obj;
