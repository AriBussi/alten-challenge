import { StyledTitle, StyledSpec } from "./Specs.styled";

const Specs = ({ data }) => {
  return (
    <>
      <StyledTitle>SPECIFICATIONS</StyledTitle>
      <dl>
        {data.map(([key, value]) => (
          <StyledSpec key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </StyledSpec>
        ))}
      </dl>
    </>
  );
};

export default Specs;
