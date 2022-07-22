import style from "./LoginLayout.module.css";
import { Link } from "react-router-dom";
import TextFormField from "../../widget/TextFormField";
import { CheckBox, EmailOutlined, LockOutlined } from "@material-ui/icons";
import Facebook from "../../../assets/Facebook.png";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple.png";
import { Button, Checkbox } from "@material-ui/core";
import SizedBox from "../../widget/SizedBox";
import { useRef, useContext } from "react";
import AuthContext from "../../../store/authContext";

const LoginLayout = (props) => {
  const _authContext = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const data = {
      email: email,
      password: password,
    };
    _authContext.loginMethod(data);
  };

  return (
    <div className={style.container}>
      <span style={{ fontSize: "30px", paddingBottom: "10px" }}>Login</span>
      <span style={{ fontSize: "16px" }}>
        If you don’t have an account register
      </span>
      <span style={{ fontSize: "16px", paddingBottom: "1rem" }}>
        You can <Link to="/signup">Register here !</Link>
      </span>
      <form>
        <TextFormField
          ref={emailInputRef}
          lable="Email"
          icon={<EmailOutlined />}
          placeHolder="Enter your email address"
        />
        <SizedBox />
        <TextFormField
          ref={passwordInputRef}
          lable="Password"
          type="password"
          icon={<LockOutlined />}
          placeHolder="Enter your password"
        />
        <div className={style.password}>
          <div>
            <CheckBox
              style={{ fontSize: "20px", marginBottom: "-5px" }}
              value="checkBox"
              checked={false}
            />
            <span style={{ fontSize: "0.7rem", paddingLeft: "0.5rem" }}>
              Remember
            </span>
          </div>
          <Link to="/password">
            <span style={{ fontSize: "0.7rem" }}>Forget Password ?</span>
          </Link>
        </div>
        <SizedBox />

        <Button
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#0C21C1",
            borderRadius: "2.5rem",
          }}
          onClick={submit}
        >
          Login
        </Button>
      </form>
      <span style={{ textAlign: "center", marginTop: "1rem" }}>
        or continue with
      </span>
      <div className={style.wraper}>
        <a href="/">
          <img className={style.icon} src={Facebook} />
        </a>
        <a href="/">
          <img className={style.icon} src={apple} />
        </a>

        <a href="/">
          <img className={style.icon} src={google} />
        </a>
      </div>
    </div>
  );
};
export default LoginLayout;
