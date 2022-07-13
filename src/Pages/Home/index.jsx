import classes from "../../style.module.scss";
import NavBar from "../../Components/NavBar";
import Content from "../../Components/Content";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const isNavBarOpen = useSelector((state) => state.header.isNavBarOpen);
  return (
    <div>
      {isNavBarOpen ? (
        <div className={classes.main}>
          <NavBar />
          <Content one={false} />
        </div>
      ) : (
        <div>
          <Content one={true} />
        </div>
      )}
    </div>
  );
};
export default Home;
