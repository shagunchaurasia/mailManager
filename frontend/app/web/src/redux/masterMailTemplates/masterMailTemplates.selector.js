import { createSelector } from "reselect";

const selectMasterMailTemplates = (state) => state.mailTemplates;

export const selectMailTemplates = createSelector(
  [selectMasterMailTemplates],
  (mailTemplate) => mailTemplate
);
