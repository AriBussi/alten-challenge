import styled from "styled-components";

export const StyledCartCount = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  margin-block: 2.4rem;
`;

export const StyledCartItem = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-bottom: 20dvh;
  }
`;

export const StyledItemImage = styled.img`
  width: 60vw;
  max-width: 26rem;
`;

export const StyledItemPrice = styled.p`
  margin-top: 2rem;
`;

export const StyledDeleteButton = styled.button`
  color: red;
  border: 0;
  background-color: transparent;
  margin-top: 3.3rem;
`;

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6rem var(--page-padding) var(--page-padding);
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;

  > div,
  > a {
    min-width: calc(50% - 1.2rem);
  }

  @media (min-width: 768px) {
    padding-top: 1.6rem;

    > a {
      max-width: 20rem;
      min-width: unset;
    }

    button {
      max-width: 26rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 5rem;
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

export const StyledTotalPrice = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 1.2rem;
  justify-content: space-between;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 2.4rem var(--page-padding);
  }
`;
