import { useState, useEffect } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { getUniqueItems } from "../utils/getUniqueItems";
import { StyledMasonry } from "./ListView.styled";

const ListView = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <StyledMasonry>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          items.map((item) => <Card key={item.id} item={item} />)
        )}
      </StyledMasonry>
    </div>
  );
};

export default ListView;
