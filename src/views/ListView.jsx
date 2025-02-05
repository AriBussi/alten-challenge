import { useState, useEffect } from "react";
import Card from "../components/Card";

const ListView = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/products?limit=20", {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        });
        const items = await res.json();
        setItems(items);
      } catch (err) {
        console.error("Error fetching items", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        items.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ListView;
