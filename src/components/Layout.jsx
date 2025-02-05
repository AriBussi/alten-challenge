import { Outlet } from "react-router-dom";
import Header from "./Header";
import { StyledContent } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default Layout;
