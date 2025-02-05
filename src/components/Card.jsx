import {
  StyledCard,
  StyledImage,
  StyledBrand,
  StyledInfo,
} from "./Card.styled";

const Card = ({ item }) => {
  return (
    <StyledCard to={`/detail/${item.id}`}>
      <StyledImage src={item.imageUrl} />
      <StyledBrand>{item.brand}</StyledBrand>
      <StyledInfo>
        <dt>{item.name}</dt>
        <dl>{item.basePrice}</dl>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;
