import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/configureStore";
import { persistStore } from "redux-persist";
import Api from "./services/api";
import { ToastContainer } from "react-toastify";
import App from "./App";

Api.init({ url: "http://192.168.18.217:5000/api" }); // this is my local url

const persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>,
  rootElement
);
