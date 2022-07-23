import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import ForgetPasswordPage from "./pages/forgetPassword/ForgetPasswordPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password" element={<ForgetPasswordPage />} />
    </Routes>
  );
}

export default App;
