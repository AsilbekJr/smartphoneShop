import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { MyContextProvider } from "./Context/Context";
import { store } from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
