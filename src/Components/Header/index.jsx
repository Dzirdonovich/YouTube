import classes from "./index.module.scss";
import Input from "../UI/Input";
import NavEndItem from "../UI/NavEndItem";
import EndPopUp from "../UI/EndPopUp";
import { useDispatch, useSelector } from "react-redux";
import { setOpenNavBar } from "../../redux/Slices/HeaderSlide";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const isNavBarOpen = useSelector((state) => state.header.isNavBarOpen);
  const login = useSelector((state) => state.main.login);
  console.log(login);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.nav__start}>
          <div
            onClick={() => {
              dispatch(setOpenNavBar(!isNavBarOpen));
            }}
            className={classes.nav__burger__wrapper}
          >
            <div className={classes.nav__burger}></div>
          </div>
          <div className={classes.nav__logo}>YouTube</div>
        </div>
        <div className={classes.nav__center}>
          <Input type="text" />
        </div>
        <div className={classes.nav__end}>
          <div className={classes.nav__endMain}>
            {login ? (
              <>
                <NavEndItem />
              </>
            ) : (
              <Link to="/login">Войти</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
