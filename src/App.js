import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import CardList from "./components/cardList";

const url = "https://api.github.com/repos/facebook/react/issues"

export default function App() {
  const [rawData, setRawData] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const resultJson = await result.json();
        setRawData(resultJson);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  const filterList = () => {
    if (query) {
      return rawData.filter((data) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return [];
    }
  };

  return (
    <div className="App" style={{ width: "70%", margin: "10px auto" }}>
      <SearchBar id="searchbar" setQuery={setQuery} />
      <CardList list={filterList()} />
    </div>
  );
}
