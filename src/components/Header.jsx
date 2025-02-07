import { useContext } from "react";
import { StyledHeader, StyledCart } from "./Header.styled";
import { CartContext } from "../context/cartContext";

import logo from "../assets/logo.svg";
import empty from "../assets/bag-empty.svg";
import full from "../assets/bag-full.svg";

const Header = () => {
  const { getCartCount } = useContext(CartContext);

  const count = getCartCount();

  return (
    <StyledHeader>
      <img src={logo} />
      <StyledCart>
        <img src={count === 0 ? empty : full} />
        <p>{count}</p>
      </StyledCart>
    </StyledHeader>
  );
};

export default Header;
