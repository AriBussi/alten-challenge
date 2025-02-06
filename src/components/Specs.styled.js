import styled from "styled-components";

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const StyledSpec = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.black};
  display: flex;
  gap: 1.2rem;
  padding-block: 1.6rem;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.black};
  }

  > dt {
    text-transform: uppercase;
    min-width: 40%;
  }
`;
