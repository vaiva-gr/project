import * as React from "react";
import { Provider } from "react-redux";

import { GlobalStyles } from "./globalStyles";
import { RoutesConnected as Routes } from "./Routes";
import { configureStore } from "./store/store";

const { store } = configureStore();

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
);
