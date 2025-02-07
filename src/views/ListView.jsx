import { useState, useEffect } from "react";
import Card from "../components/Card";
import Search from "../components/Search";

const ListView = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Backend is returning a duplicated item XMI-RN13P5G which causes unexpected behaviors
  // A proper fix should be handled on the backend to ensure unique items in the response
  // As a temporary workaround, I fetch more items and filter them down to get 20 unique ones
  const getUniqueItems = (items, limit) => {
    const uniqueItems = Array.from(
      new Map(items.map((item) => [item.id, item])).values()
    );

    return uniqueItems.slice(0, limit);
  };

  const fetchItems = async (searchString) => {
    if (!searchString && items.length === 20) return;

    const query = searchString ? `search=${searchString}` : "limit=25";

    try {
      const res = await fetch(`/api/products?${query}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      });

      const items = await res.json();

      setItems(getUniqueItems(items, 20));
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
