import MailActionTypes from "./masterMail.type";

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
  mails: null,
};

const mailReducer = (state = INITIAL_STATE, action) => {
  console.log("Inside master mail reducer");
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case MailActionTypes.FETCH_MAILS_START:
      return {
        ...state,
        isFetching: true,
      };
    case MailActionTypes.FETCH_MAILS_SUCCESS:
      return {
        ...state,
        mails: action.payload.data,
        isFetching: false,
      };

    case MailActionTypes.FETCH_MAILS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mailReducer;
