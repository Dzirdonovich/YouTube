import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser, setLoginTrue, setUser } from "../../redux/Slices/MainSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const loginData = {};
  const ref = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.main.user);
  const login = useSelector((state) => state.main.login);
  const fetchUsers = async () => {
    await axios.get("http://localhost:4200/users").then((resp) => {
      resp.data.map((index) => {
        console.log(loginData.name);
        if (index.name === loginData.name) {
          if (index.password === loginData.password) {
            dispatch(setLoginTrue());
          }
        }
      });
    });
  };

  useEffect(() => {}, [user]);

  return (
    <form ref={ref}>
      <input type="text" placeholder="Имя" />
      <input type="text" placeholder="Пароль" />
      <Link
        onClick={(e) => {
          loginData.name = ref.current[0].value;
          dispatch(setUser(loginData.name));
          loginData.password = ref.current[1].value;
          dispatch(checkUser(loginData));
          fetchUsers();
        }}
        to="/"
      >
        Войти
      </Link>
    </form>
  );
};

export default Login;
