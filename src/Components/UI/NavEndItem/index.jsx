import classes from "./index.module.scss";
import EndPopUp from "../EndPopUp";

const NavEndItem = () => {
  return (
    <div onClick={() => console.log(1)} className={classes.EndItem__wrapper}>
      <div className={classes.EndItem__content}></div>
      <EndPopUp />
    </div>
  );
};
export default NavEndItem;
