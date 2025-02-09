import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled(Link)`
  border: 0.5px solid ${({ theme }) => theme.colors.black};
  padding: 1.6rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4rem;
  grid-gap: 1rem;
  width: 100%;
  min-height: 34.5rem;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 978px) {
    width: 33.3%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 26rem;
  place-self: center;
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
