import { useState, useEffect } from "react";
import Card from "../components/Card";
import Search from "../components/Search";

const ListView = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async (searchString) => {
    const query = searchString ? `search=${searchString}` : "limit=20";

    try {
      const res = await fetch(`/api/products?${query}`, {
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

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Search
        results={items.length}
        onSearch={(string) => fetchItems(string)}
      />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        items.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ListView;
