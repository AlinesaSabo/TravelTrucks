import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
