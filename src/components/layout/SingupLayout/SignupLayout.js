import style from "./SignupLayout.module.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Person, EmailOutlined, LockOutlined } from "@material-ui/icons";
import TextFormField from "../../widget/TextFormField";
import SizedBox from "../../widget/SizedBox";
import { useContext, useRef } from "react";
import AuthContext from "../../../store/authContext";

const SignupLayout = (props) => {
  const _authContext = useContext(AuthContext);
  const emailInputRef = useRef();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const userName = userNameInputRef.current.value;
    const data = {
      email: email,
      password: password,
      userName: userName,
    };
    _authContext.signupMethod(data);
  };
  return (
    <div className={style.container}>
      <span style={{ fontSize: "30px", paddingBottom: "10px" }}>Sign up</span>
      <span style={{ fontSize: "16px" }}>
        If you already have an account register
      </span>
      <span style={{ fontSize: "16px", paddingBottom: "1rem" }}>
        You can <Link to="/">login here !</Link>
      </span>
      <form>
        <TextFormField
          ref={emailInputRef}
          lable="Email"
          icon={<EmailOutlined />}
          placeHolder="Enter your email"
        />
        <SizedBox />
        <TextFormField
          ref={userNameInputRef}
          lable="User Name"
          icon={<Person />}
          placeHolder="Enter your User name"
        />
        <SizedBox />
        <TextFormField
          ref={passwordInputRef}
          lable="Password"
          type="password"
          icon={<LockOutlined />}
          placeHolder="Enter your password"
        />
        <SizedBox />
        <TextFormField
          lable="Confrim Password"
          type="password"
          icon={<LockOutlined />}
          placeHolder="Confrim your password"
        />
        <SizedBox size="2" />
        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#0C21C1",
            borderRadius: "2.5rem",
          }}
          onClick={submit}
        >
          Register
        </Button>
      </form>
    </div>
  );
};
export default SignupLayout;
