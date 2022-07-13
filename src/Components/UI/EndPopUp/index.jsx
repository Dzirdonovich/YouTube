import classes from "./index.module.scss";
import { Link } from "react-router-dom";

const EndPopUp = () => {
  return (
    <div className={classes.wrapper}>
      <Link to="form"> Создать видео </Link>
    </div>
  );
};
export default EndPopUp;
