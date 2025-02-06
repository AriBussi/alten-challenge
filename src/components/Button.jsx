import { StyledButton } from "./Button.styled";

const Button = ({
  variant = "standard",
  as = "button",
  label,
  isDisabled,
  onClick,
}) => {
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
      as={as}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
