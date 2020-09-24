import React from "react";
import MasterMailTemplatesComponent from "./master-mail-templates.component";
import withData from "../../shared/withData/withData.component";

const MasterMailTemplates = (props) => {
  return (
    <div>
      <MasterMailTemplatesComponent data={props.data} />
    </div>
  );
};

export default withData(
  MasterMailTemplates,
  "http://localhost:2000/api/mailTemplates"
);
