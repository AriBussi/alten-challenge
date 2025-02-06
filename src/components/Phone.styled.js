import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledPhoneTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
`;

export const StyledOptionGroup = styled.fieldset`
  display: flex;
  border: 0;
  text-transform: uppercase;
`;

export const StyledStorageOption = styled.label`
  width: 9.5rem;
  height: 4.8rem;
  border: 1px solid ${(props) => (props.$isSelected ? "#000" : "#CCC")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledColorOption = styled.label`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid ${(props) => (props.$isSelected ? "#000" : "#CCC")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    inset: 1px;
    background-color: ${(props) => props.$color};
  }
`;
