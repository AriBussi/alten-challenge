import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Specs from "./Specs";
import { CartContext } from "../context/cartContext";
import {
  StyledImage,
  StyledTitle,
  StyledPhonePrice,
  StyledOptionGroup,
  StyledStorageOption,
  StyledColorOption,
  StyledAddToCartContainer,
} from "./Phone.styled";

const Phone = ({ phone }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart({
      id: `${Date.now()}-${Math.random()}`,
      name: phone.name,
      color: selectedColor,
      storage: selectedStorage,
    });

    navigate("/");
  };

  return (
    <div>
      <StyledImage
        src={selectedColor?.imageUrl || phone.colorOptions[0].imageUrl}
      />
      <StyledTitle>{phone.name}</StyledTitle>
      <StyledPhonePrice>
        {selectedStorage?.price || `From ${phone.basePrice}`} EUR
      </StyledPhonePrice>

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

      <StyledAddToCartContainer>
        <Button
          label="Añadir"
          isDisabled={!selectedColor || !selectedStorage}
          onClick={handleAdd}
          variant="primary"
        />
      </StyledAddToCartContainer>

      <Specs
        data={[
          ["Brand", phone.brand],
          ["Name", phone.name],
          ["Description", phone.description],
          ...Object.entries(phone.specs),
        ]}
      />
    </div>
  );
};

export default Phone;
