import React from "react";
import CustomizedTable from "../../shared/customizedTable/customizedTable.component";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const MasterMailTemplatesComponent = (props) => {
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => <a href={text}>{text === 1 ? "Active" : "Inactive"}</a>,
    },
    {
      title: "Template Name",
      dataIndex: "templateName",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Mail To",
      dataIndex: "mailTo",
    },
    {
      title: "Mail CC",
      dataIndex: "mailCC",
    },
    {
      title: "Mail BCC",
      dataIndex: "mailBCC",
    },
    {
      title: "Added On",
      dataIndex: "addedDate",
    },
  ];
  return (
    <div>
      <Button type="primary" icon={<DownloadOutlined />} size="large">
        Download
      </Button>
      <CustomizedTable
        columnsPassed={columns}
        dataPassed={props.data}
        hasData={props.data ? true : false}
      ></CustomizedTable>
    </div>
  );
};

export default MasterMailTemplatesComponent;
