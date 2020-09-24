const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MailSchema = new Schema(
  {
    flow: { type: String, required: [true, "Flow is required"] },
    subject: { type: String, required: true },
    messageBody: { type: String },
    mailTo: { type: String, required: [true, "Mail To is required"] },
    mailCC: { type: String },
    mailBCC: { type: String },
    parentId: { type: String },
    hasAttachment: { type: Number },
    attachments: { type: String },
    mailDateTime: { type: Date, default: Date.now },
    tags: { type: String },
    mailReference: { type: String },
    mailTemplateId: { type: String },
  },
  { collection: "mail" }
);

var MailModel = mongoose.model("mail", MailSchema);
module.exports = MailModel;
