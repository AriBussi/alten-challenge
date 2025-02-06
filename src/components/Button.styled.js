import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$disabled ? props.theme.colors.neutral1 : props.theme.colors.black};
  color: ${(props) =>
    props.$disabled ? props.theme.colors.neutral3 : props.theme.colors.white};
  height: 4.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  text-transform: uppercase;
  border-radius: 0;
`;
