import style from "./LoginPage.module.css";
import BackgroundScreen from "../../components/widget/BackgroundScreen";
import LoginLayout from "../../components/layout/LoginLayout/LoginLayout";

const LoginPage = (props) => {
  return (
    <div className={style.container}>
      <div className={style.child}>
        <LoginLayout />
      </div>
      <div className={style.background}>
        <BackgroundScreen lable="Sign in to Name" />
      </div>
    </div>
  );
};

export default LoginPage;
