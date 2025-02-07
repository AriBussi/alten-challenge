import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { StyledHeader, StyledLogoLink, StyledCartLink } from "./Header.styled";
import { CartContext } from "../context/cartContext";

import logo from "../assets/logo.svg";
import empty from "../assets/bag-empty.svg";
import full from "../assets/bag-full.svg";

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const location = useLocation();

  const count = getCartCount();

  return (
    <StyledHeader>
      <StyledLogoLink to="/">
        <img src={logo} />
      </StyledLogoLink>
      {location.pathname !== "/cart" && (
        <StyledCartLink to="/cart">
          <img src={count === 0 ? empty : full} />
          <p>{count}</p>
        </StyledCartLink>
      )}
    </StyledHeader>
  );
};

export default Header;
