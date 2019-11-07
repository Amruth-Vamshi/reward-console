import registerServiceWorker from "./registerServiceWorker";

import * as React from "react";
import { render } from "react-dom";
// import App from "./App/App";

import { WalkinApp } from "./WalkinApp";

// Render once
render(<WalkinApp />, document.getElementById("root"));

// Do this once
registerServiceWorker();
