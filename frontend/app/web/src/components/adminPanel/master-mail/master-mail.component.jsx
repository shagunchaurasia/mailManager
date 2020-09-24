import React from "react";
import { Avatar } from "antd";
import { connect } from "react-redux";
import { selectMailsFromDB } from "./../../../redux/masterMail/masterMail.selector";
import { createStructuredSelector } from "reselect";

const MasterMailComponent = (props) => {
  console.log("Inside master mail component");
  console.log(props.mails);
  return (
    <div>
      {/* Here inside master mail */}
      {props.mails
        ? props.mails.map((mail) => {
            const months = [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ];

            let date =
              new Date(mail.mailDateTime).getDate() +
              " " +
              months[new Date(mail.mailDateTime).getMonth()] +
              "," +
              new Date(mail.mailDateTime).getFullYear();
            return (
              <div
                className="singleMailView"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  borderBottom: "solid 1px rgba(0,0,0,.2)",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                  }}
                >
                  <div>
                    <Avatar
                      style={{
                        backgroundColor: "#001529",
                        verticalAlign: "middle",
                        marginRight: "20px",
                      }}
                      size="large"
                    >
                      <span>{mail.mailTo.charAt(0)}</span>
                    </Avatar>
                    {mail.mailTo}
                  </div>
                  <div>{date}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  {mail.subject}
                </div>
              </div>
            );
          })
        : "Nothing was found"}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mails: selectMailsFromDB,
});

export default connect(mapStateToProps)(MasterMailComponent);
