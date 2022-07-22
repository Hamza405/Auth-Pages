import style from "./ForgetPasswordPage.module.css";
import BackgroundScreen from "../../components/widget/BackgroundScreen";
import ForgetPasswordLayout from "../../components/layout/ForgetPasswordLayout/ForgetPasswordLayout";
const ForgetPasswordPage = (props) => {
  return (
    <div className={style.container}>
      <div className={style.child}>
        <ForgetPasswordLayout />
      </div>
      <div className={style.background}>
        <BackgroundScreen lable="Change Password" />
      </div>
    </div>
  );
};
export default ForgetPasswordPage;
