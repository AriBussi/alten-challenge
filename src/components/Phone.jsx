import { useState } from "react";
import {
  StyledImage,
  StyledPhoneTitle,
  StyledOptionGroup,
  StyledStorageOption,
  StyledColorOption,
} from "./Phone.styled";

const Phone = ({ phone }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  return (
    <div>
      <StyledImage
        src={selectedColor?.imageUrl || phone.colorOptions[0].imageUrl}
      />
      <StyledPhoneTitle>{phone.name}</StyledPhoneTitle>
      <p>{selectedStorage?.price || `From ${phone.basePrice}`} EUR</p>

      <StyledOptionGroup>
        <legend>Storage. How much space do you need?</legend>
        {phone.storageOptions.map((option) => {
          return (
            <StyledStorageOption
              key={option.capacity}
              onClick={() => setSelectedStorage(option)}
              htmlFor={option.capacity}
              $isSelected={option.capacity === selectedStorage?.capacity}
            >
              <input
                className="visually-hidden"
                name="storageOption"
                type="radio"
                id={option.capacity}
              />
              <span>{option.capacity}</span>
            </StyledStorageOption>
          );
        })}
      </StyledOptionGroup>

      <StyledOptionGroup>
        <legend>Color. Pick your favourite.</legend>
        {phone.colorOptions.map((option) => {
          return (
            <StyledColorOption
              key={option.name}
              onClick={() => setSelectedColor(option)}
              htmlFor={option.name}
              $isSelected={option.name === selectedColor?.name}
              $color={option.hexCode}
            >
              <input
                className="visually-hidden"
                name="colorOption"
                type="radio"
                id={option.name}
              />
            </StyledColorOption>
          );
        })}
      </StyledOptionGroup>
      <p>{selectedColor?.name}</p>
    </div>
  );
};

export default Phone;
