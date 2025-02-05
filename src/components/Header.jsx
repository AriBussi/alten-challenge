import { StyledHeader, StyledCart } from "./Header.styled";
import logo from "../assets/logo.svg";
import bag from "../assets/bag.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} />
      <StyledCart>
        <img src={bag} />
        <p>0</p>
      </StyledCart>
    </StyledHeader>
  );
};

export default Header;
