import {
  StyledTitle,
  StyledCarousel,
  StyledCarouselCard,
} from "./Carousel.styled";

const Carousel = ({ items }) => {
  return (
    <>
      <StyledTitle>similar items</StyledTitle>
      <StyledCarousel>
        {items.map((item) => (
          <StyledCarouselCard key={item.id} item={item} />
        ))}
      </StyledCarousel>
    </>
  );
};

export default Carousel;
