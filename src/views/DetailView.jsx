import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  return isLoading ? <p>Loading</p> : <h1>{item.name}</h1>;
};

export default DetailView;
