import style from "./ForgetPasswordLayout.module.css";
import TextFormField from "../../widget/TextFormField";
import { EmailOutlined } from "@material-ui/icons";
import SizedBox from "../../widget/SizedBox";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useRef, createContext } from "react";
import AuthContext from "../../../store/authContext";
const ForgetPasswordLayout = (props) => {
  const emailInputref = useRef();
  const _authContext = createContext(AuthContext);

  const submit = (email) => {
    _authContext.forgetPassword(emailInputref.current.value);
  };
  return (
    <div className={style.container}>
      <span style={{ fontSize: "30px", paddingBottom: "10px" }}>
        Forget Password
      </span>
      <span style={{ fontSize: "16px" }}>
        Enter a email address and well send you a link to reset your password
      </span>
      <SizedBox />
      <TextFormField
        ref={emailInputref}
        lable="Email"
        icon={<EmailOutlined />}
        placeHolder="Enter your email address"
      />
      <SizedBox />
      <Button
        style={{
          color: "white",
          backgroundColor: "#0C21C1",
          borderRadius: "2.5rem",
        }}
        onClick={submit}
      >
        Continue
      </Button>
      <SizedBox />
      <div className={style.wraper}>
        don’t have an account, <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default ForgetPasswordLayout;
