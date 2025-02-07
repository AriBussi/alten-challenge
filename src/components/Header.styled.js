import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.6rem;
  font-size: 1.6rem;
  position: fixed;
`;

export const StyledCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;
