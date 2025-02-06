import styled from "styled-components";

export const StyledCartCount = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 2.4;
`;

export const StyledCartItem = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 3.3rem;
`;

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.4rem 1.6rem;
`;
