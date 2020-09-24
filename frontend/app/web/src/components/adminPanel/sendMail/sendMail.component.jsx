import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./sendMail.style.scss";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const onFinish = (values) => {
  console.log("Success:", values);
  console.log("onfill");
  const sendOptions = {
    mailTo: values.mailTo,
    mailBCC: values.mailBCC,
    mailCC: values.mailCC,
    mailBody: values.mailBody,
    subject: values.subject,
  };
  axios
    .post("http://localhost:2000/api/mail", sendOptions)
    .then(function (response) {
      console.log(response);
    });
};

const onReset = () => {
  console.log("on reset");
};

const MasterSendMailComponent = (props) => {
  return (
    <div>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Mail To"
          name="mailTo"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input to mail ids!",
            },
          ]}
        >
          <Input placeholder="Please enter semi-colon separated values" />
        </Form.Item>
        <Form.Item label=" Mail CC" name="mailCC" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mail BCC" name="mailBCC" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Subject" name="subject">
          <Input />
        </Form.Item>
        <Form.Item label=" Mail Body" name="mailBody">
          <CKEditor
            editor={ClassicEditor}
            data="<p>This will be the signature</p>"
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout} style={{ marginTop: "20px" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MasterSendMailComponent;
