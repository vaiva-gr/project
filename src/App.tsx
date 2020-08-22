import * as React from "react";
import { Routes } from "./Routes";
import { Provider } from "react-redux";

import { configureStore } from "./store/store";

const { store } = configureStore();

export const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
