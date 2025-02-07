import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackLink = styled(Link)`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  text-transform: uppercase;
  padding-block: 1.2rem;
`;

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-inline: 1.6rem;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const StyledNav = styled.nav`
  color: ${({ theme }) => theme.colors.black};
  height: 8rem;
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogoLink = styled(Link)`
  height: 3rem;
`;

export const StyledCartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;
