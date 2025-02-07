import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import {
  StyledHeaderSpace,
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

  const showBackButton = location.pathname.includes("/detail/");
  const showCart = location.pathname.includes("/cart");

  return (
    <StyledHeaderSpace $spacing={showBackButton ? "12.4" : "8"}>
      <StyledHeader>
        <StyledNav>
          <StyledLogoLink to="/">
            <img src={logo} />
          </StyledLogoLink>
          {showCart && (
            <StyledCartLink to="/cart">
              <img src={count === 0 ? empty : full} />
              <p>{count}</p>
            </StyledCartLink>
          )}
        </StyledNav>

        {showBackButton && (
          <StyledBackLink to="/">
            <img src={carret} />
            Back
          </StyledBackLink>
        )}
      </StyledHeader>
    </StyledHeaderSpace>
  );
};

export default Header;
