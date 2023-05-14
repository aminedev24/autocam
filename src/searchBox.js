import React, { useState } from "react";
import "./searchBox.css";

function SearchBox() {
  const [year, setYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleClear = () => {
    setYear("");
    setMinPrice("");
    setMaxPrice("");
  };

  const handleSubmit = () => {
    // Perform search or submit action here
    console.log("Search submitted:", year, minPrice, maxPrice);
  };

  return (
    <div className="search-box-container">
      <header className="search-header">Find a Car</header>
      <div className="select-container">
        <label className="select-label">Year</label>
        <select
          className="select-menu"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="select-container">
        <label className="select-label">Year</label>
        <select
          className="select-menu"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Make</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="select-container">
        <label className="select-label">FOB Price</label>
        <div className="price-select-wrapper">
          <select
            className="select-menu price-select"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Min</option>
            <option value="1000">$1,000</option>
            <option value="5000">$5,000</option>
            <option value="10000">$10,000</option>
            {/* Add more options as needed */}
          </select>
        <div className="~">~</div>
          <select
            className="select-menu price-select"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Max</option>
            <option value="10000">$10,000</option>
            <option value="50000">$50,000</option>
            <option value="100000">$100,000</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="button-container">
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
