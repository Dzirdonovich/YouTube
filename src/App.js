import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Login from "./Pages/Login";
import classes from "./style.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
