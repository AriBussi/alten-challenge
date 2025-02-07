import styled from "styled-components";

export const StyledSearch = styled.form`
  text-transform: uppercase;
  margin-bottom: 3.6rem;
`;

export const StyledInput = styled.input`
  background: white;
  width: 100%;
  height: 2.7rem;
  border: 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 1.2rem;
  outline: 0;

  &::placeholder {
    color: #aaa;
  }
`;
