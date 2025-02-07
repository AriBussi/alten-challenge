import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUniqueItems } from "../utils/getUniqueItems";
import Phone from "../components/Phone";
import Carousel from "../components/Carousel";
import useScrollToTop from "../utils/useScrollToTop";

const DetailView = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useScrollToTop();

  useEffect(() => {
    setIsLoading(true);

    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/products/${id}`, {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        });
        const items = await res.json();
        setItem(items);
      } catch (err) {
        console.error("Error fetching items", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <Phone phone={item} />
      <Carousel items={getUniqueItems(item.similarProducts)} />
    </>
  );
};

export default DetailView;
