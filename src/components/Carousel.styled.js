import styled from "styled-components";
import Card from "./Card";

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  margin: 8rem 0 4rem 0;
`;

export const StyledCarousel = styled.div`
  overflow-x: scroll;
  display: flex;
`;

export const StyledCarouselCard = styled(Card)`
  flex-shrink: 0;
  max-width: 80dvw;

  @media (min-width: 600px) {
    width: 40dvw;
  }

  @media (min-width: 768px) {
    width: 38dvw;
  }

  @media (min-width: 1100px) {
    width: 30%;
  }
`;
