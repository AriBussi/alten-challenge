import { StyledButton } from "./Button.styled";

const Button = ({ variant = "standard", label, isDisabled, onClick }) => {
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
      $variant={variant}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
