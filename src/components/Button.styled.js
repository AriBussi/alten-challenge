import styled from "styled-components";

const backgroundColors = {
  standard: (theme) => theme.colors.white,
  primary: (theme) => theme.colors.black,
};

const textColors = {
  standard: (theme) => theme.colors.black,
  primary: (theme) => theme.colors.white,
};

export const StyledButton = styled.button`
  background-color: ${({ theme, $disabled, $variant = "standard" }) =>
    $disabled ? theme.colors.neutral1 : backgroundColors[$variant](theme)};
  color: ${({ theme, $disabled, $variant }) =>
    $disabled ? theme.colors.neutral3 : textColors[$variant](theme)};
  height: 4.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, $disabled }) =>
      $disabled ? theme.colors.neutral1 : theme.colors.black};
  text-transform: uppercase;
  border-radius: 0;
`;
