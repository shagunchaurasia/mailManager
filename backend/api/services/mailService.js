const _ = require("lodash");
const MailModel = require("../models/mailModel");

let obj = {};

obj.create = function (data) {
  return new Promise((resolve, reject) => {
    let mailData = new MailModel({
      flow: "OUT",
      mailTo: data.mailTo,
      mailCC: data.mailCC,
      mailBCC: data.mailBCC,
      messageBody: data.messageBody,
      subject: data.subject,
      mailTemplate: data.mailTemplate,
    });
    mailData
      .save()
      .then((mailResponse) => {
        let mail = _.pick(mailResponse, ["id"]);
        resolve(mail);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Fetches all Mails
obj.fetchAll = function (...args) {
  return new Promise(function (resolve, reject) {
    MailModel.find()
      .then((mailRes) => {
        if (mailRes) {
          console.log(mailRes);
          resolve(mailRes);
        } else {
          resolve({});
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = obj;
