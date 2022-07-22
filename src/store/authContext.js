import { createContext, useState } from "react";

const AuthContext = createContext({
  isAuth: false,
  loginMethod: (data) => {},
  signupMethod: (data) => {},
  forgetPasswordMethod: (email) => {},
});

export function AuthContextProvider(props) {
  const [isAuthState, setIsAuth] = useState(false);
  const login = (data) => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setIsAuth(true);
    });
  };
  const signup = (data) => {
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setIsAuth(true);
    });
  };
  const forgetPassword = (email) => {
    fetch("http://localhost:5000/api/reset_password", {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const context = {
    isAuth: isAuthState,
    loginMethod: login,
    signupMethod: signup,
    forgetPasswordMethod: forgetPassword,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
