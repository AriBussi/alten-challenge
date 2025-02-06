import { StyledButton } from "./Button.styled";

const Button = ({ label, isDisabled, onClick }) => {
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };
  return (
    <StyledButton
      aria-disabled={isDisabled}
      onClick={handleClick}
      $disabled={isDisabled}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
