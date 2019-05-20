import { Component } from "react";

export class AppProviders extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <LocaleProvider locale={currentAppLocale.antd}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          />
        </LocaleProvider>
      </ApolloProvider>
    );
  }
}
