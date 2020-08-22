import * as React from "react";
// import { Routes } from "./Routes";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { RoutesConnected as Routes } from "./Routes";
import { configureStore } from "./store/store";

const { store } = configureStore();

export const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
