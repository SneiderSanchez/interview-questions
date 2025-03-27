import React, { useRef, useState } from "react";
import "./App.css";

function useDebounceCallback<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number
) {
  const timer = useRef<null | number>(null);

  return function (...args: Parameters<T>) {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  function getApiData(searchQuery: string) {
    console.log("Fetching data for:", searchQuery);

    setData([`Result 1 for "${searchQuery}"`, `Result 2 for "${searchQuery}"`]);
  }

  const debouncedGetApiData = useDebounceCallback(getApiData, 2000);

  function handleQueryUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
    debouncedGetApiData(e.currentTarget.value);
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          onChange={(e) => handleQueryUpdate(e)}
          value={query}
          placeholder="hola"
        />
      </form>

      {data.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
}

export default App;
