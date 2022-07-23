import ReactDOM from "react-dom";
import { AuthContextProvider } from "./store/authContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter basename="/Auth-Pages">
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
