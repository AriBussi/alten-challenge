import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 26rem;
  place-self: center;
`;

export const StyledBrand = styled.p`
  color: ${({ theme }) => theme.colors.neutral4};
  font-size: 1rem;
  transition: color 0.4s;
`;

export const StyledInfo = styled.dl`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  transition: color 0.4s;
`;

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
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.black},
    ${({ theme }) => theme.colors.black}
  );
  background-size: 100% 0;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size 0.4s;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 978px) {
    width: 33.3%;

    &:hover {
      background-size: 100% 100%;

      ${StyledBrand} {
        color: ${({ theme }) => theme.colors.neutral2};
        transition: color 0.4s;
      }

      ${StyledInfo} {
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.4s;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;
