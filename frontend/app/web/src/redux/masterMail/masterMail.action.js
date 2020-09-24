import MailActionTypes from "./masterMail.type";
import axios from "axios";

export const fetchMailsStart = () => {
  console.log("Started fetching");
  return {
    type: MailActionTypes.FETCH_MAILS_START,
  };
};

export const fetchMailSuccess = (mails) => {
  return {
    type: MailActionTypes.FETCH_MAILS_SUCCESS,
    payload: mails,
  };
};

export const fetchMailsFailure = (errorMessage) => {
  return {
    type: MailActionTypes.FETCH_MAILS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchMailsStartAsync = () => {
  console.log("Inside fetch Mail ");
  return (dispatch) => {
    dispatch(fetchMailsStart());

    axios
      .get("http://localhost:2000/api/mail")
      .then((response) => {
        console.log(response.data);
        dispatch(fetchMailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMailsFailure(error.message));
      });
  };
};
