import Header from "./header/Header";
import Home from "./body/Home";
import SignIn from "./Form-Control/SignIn";
import { Route, Routes } from "react-router";
const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
};
export default Main;
