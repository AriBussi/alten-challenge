import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled(Link)`
  border: 0.5px solid ${({ theme }) => theme.colors.black};
  padding: 1.6rem;
  text-transform: uppercase;
  display: block;

  &:not(:first-of-type) {
    border-top: 0;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledBrand = styled.p`
  color: ${({ theme }) => theme.colors.neutral4};
  font-size: 1rem;
`;

export const StyledInfo = styled.dl`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
`;
