import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Button from "../components/Button";
import {
  StyledCartCount,
  StyledCartItem,
  StyledItemImage,
  StyledItemPrice,
  StyledDeleteButton,
  StyledFooter,
  StyledTotalPrice,
} from "./CartView.styled";

const CartView = () => {
  const { cartItems, removeFromCart, getCartCount, getTotalPrice } =
    useContext(CartContext);

  const count = getCartCount();

  return (
    <>
      <StyledCartCount>cart ({count})</StyledCartCount>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <StyledCartItem key={item.id}>
            <StyledItemImage src={item.color.imageUrl} />
            <div>
              <p>{item.name}</p>
              <p>
                {item.storage.capacity} | {item.color.name}
              </p>

              <StyledItemPrice>{item.storage.price} EUR</StyledItemPrice>
              <StyledDeleteButton
                type="button"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </StyledDeleteButton>
            </div>
          </StyledCartItem>
        ))}
      <StyledFooter>
        <Button href="/" label="continue shopping" />
        {!!count && (
          <div>
            <StyledTotalPrice>
              <p>total</p>
              <p>{getTotalPrice()} EUR</p>
            </StyledTotalPrice>
            <Button label="pay" variant="primary" />
          </div>
        )}
      </StyledFooter>
    </>
  );
};

export default CartView;
