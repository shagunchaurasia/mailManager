import { createSelector } from "reselect";

const selectMails = (state) => state.mails;

export const selectMailsFromDB = createSelector(
  [selectMails],
  (mailsSelect) => {
    console.log("Here inside select mails from db");
    console.log(mailsSelect);
    return mailsSelect.mails;
  }
);

export const selectIsMailsFetching = createSelector(
  [selectMails],
  (mailsSelect) => {
    console.log("Inside select is mails fetching" + mailsSelect.isFetching);
    return mailsSelect.isFetching;
  }
);

export const selectIsMailsFetched = createSelector(
  [selectMails],
  (mailsSelect) => !!mailsSelect.mails
);
