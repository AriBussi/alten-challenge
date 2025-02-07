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
  flex-wrap: nowrap;
`;

export const StyledCarouselCard = styled(Card)`
  max-width: 33rem;
  flex-shrink: 0;

  &:not(:first-of-type) {
    border-top: 0.5px solid ${({ theme }) => theme.colors.black};
  }
`;
