import * as React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

const InjectMassage = props => <FormattedMessage {...props} />;
export const InjectMassageModule = injectIntl(InjectMassage, {
  withRef: false
});
