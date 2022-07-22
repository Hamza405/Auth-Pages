import style from "./BackgroundScreen.module.css";
import i from "../../assets/Saly-10.png";
import { Call } from "@material-ui/icons";

const BackgroundScreen = ({ lable }) => {
  return (
    <div className={style.container}>
      <div className={style.conact}>
        <div className={style.conactclass}>
          <Call style={{ color: "white", fontSize: "20px" }} />
          <span
            style={{
              color: "white",
              fontSize: "15px",
              paddingLeft: "10px",
              paddingBotton: "10px",
            }}
          >
            +88 596 782 483
          </span>
        </div>
      </div>
      <img src={i} />
      <span
        className={style.content}
        style={{ fontSize: "40px", color: "white" }}
      >
        {lable}
      </span>
      <span
        className={style.content}
        style={{ fontSize: "20px", color: "white" }}
      >
        Lorem Ipsum is simply{" "}
      </span>
    </div>
  );
};

export default BackgroundScreen;
