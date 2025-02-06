import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
`;

export const StyledPhonePrice = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

export const StyledOptionGroup = styled.fieldset`
  display: flex;
  border: 0;
  text-transform: uppercase;
  margin-top: 3.2rem;
`;

export const StyledStorageOption = styled.label`
  width: 9.5rem;
  height: 4.8rem;
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.black
        : props.theme.colors.neutral2};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
`;

export const StyledColorOption = styled.label`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.black
        : props.theme.colors.neutral2};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2rem 1.6rem 0.8rem 0;

  &:before {
    content: "";
    position: absolute;
    inset: 1px;
    background-color: ${(props) => props.$color};
  }
`;

export const StyledAddToCartContainer = styled.div`
  margin: 4rem 0 8rem 0;
`;
