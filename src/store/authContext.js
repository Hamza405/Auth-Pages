import { createContext, useState } from "react";

const endpoint = "http://localhost:3000/api/";
const AuthContext = createContext({
  isAuth: false,
  loginMethod: (data) => {},
  signupMethod: (data) => {},
  forgetPasswordMethod: (email) => {},
});

export function AuthContextProvider(props) {
  const [isAuthState, setIsAuth] = useState(false);
  const login = (data) => {
    fetch(`${endpoint}login`, {
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
    fetch(`${endpoint}register`, {
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
    fetch(`${endpoint}register`, {
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
