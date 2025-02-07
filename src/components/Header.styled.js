import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.6rem;
  font-size: 1.6rem;
  position: fixed;
  z-index: 1;
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
