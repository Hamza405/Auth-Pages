import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import ForgetPasswordPage from "./pages/forgetPassword/ForgetPasswordPage";
import { AuthContextProvider } from "./store/authContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password" element={<ForgetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
