import {
  StyledCard,
  StyledImage,
  StyledBrand,
  StyledInfo,
} from "./Card.styled";

const Card = ({ className, item }) => {
  return (
    <StyledCard className={className} to={`/detail/${item.id}`}>
      <StyledImage src={item.imageUrl} />
      <div>
        <StyledBrand>{item.brand}</StyledBrand>
        <StyledInfo>
          <dt>{item.name}</dt>
          <dl>{item.basePrice}</dl>
        </StyledInfo>
      </div>
    </StyledCard>
  );
};

export default Card;
