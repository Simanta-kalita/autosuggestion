import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/autocomplete";

function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?=${query}`
    );
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.recipes;
  };

  const staticData = [
    "apple",
    "banana",
    "berrl",
    "orange",
    "grape",
    "mango",
    "melon",
    "berry",
    "peach",
    "cherry",
    "plum",
  ];

  return (
    <div>
      <h1>Autocomplete Typeahead</h1>
      <Autocomplete
        placeholder={"Enter recipe"}
        // staticData={staticData}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading Recipes...</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
