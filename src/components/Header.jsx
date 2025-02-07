import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import {
  StyledHeader,
  StyledNav,
  StyledLogoLink,
  StyledCartLink,
  StyledBackLink,
} from "./Header.styled";

import logo from "../assets/logo.svg";
import empty from "../assets/bag-empty.svg";
import full from "../assets/bag-full.svg";
import carret from "../assets/carret.svg";

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const location = useLocation();
  const count = getCartCount();

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogoLink to="/">
          <img src={logo} />
        </StyledLogoLink>
        {location.pathname !== "/cart" && (
          <StyledCartLink to="/cart">
            <img src={count === 0 ? empty : full} />
            <p>{count}</p>
          </StyledCartLink>
        )}
      </StyledNav>

      {location.pathname.includes("/detail/") && (
        <StyledBackLink to="/">
          <img src={carret} />
          Back
        </StyledBackLink>
      )}
    </StyledHeader>
  );
};

export default Header;
