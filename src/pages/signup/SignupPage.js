import BackgroundScreen from "../../components/widget/BackgroundScreen";
import style from "./SignupPage.module.css";
import SignupLayout from "../../components/layout/SingupLayout/SignupLayout";
const SignupPage = (props) => {
  return (
    <div className={style.container}>
      <div className={style.child}>
        <SignupLayout />
      </div>
      <div className={style.background}>
        <BackgroundScreen lable="Sign up to Name" />
      </div>
    </div>
  );
};

export default SignupPage;
