import classes from "./index.module.scss";

const Input = ({ type }) => {
  return (
    <div className={classes.input__wrapper}>
      <input type={type} />
      <button className={classes.input__button}>
        <div className={classes.input__svg}></div>
      </button>
    </div>
  );
};
export default Input;
