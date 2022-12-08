import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { MyContextProvider } from "./Context/Context";
import { store } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MyContextProvider>
  </React.StrictMode>
);
