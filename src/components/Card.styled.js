import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled(Link)`
  border: 0.5px solid ${(props) => props.theme.colors.black};
  padding: 1.6rem;
  text-transform: uppercase;
  display: block;

  &:not(:first-child) {
    border-top: 0;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledBrand = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1rem;
`;

export const StyledInfo = styled.dl`
  color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
`;
