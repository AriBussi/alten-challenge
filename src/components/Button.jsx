import { StyledButton } from "./Button.styled";

const Button = ({
  variant = "standard",
  href = undefined,
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
      as={href ? "a" : "button"}
      href={href}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
