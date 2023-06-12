import React, { useState, useEffect, useRef } from "react";

const CurrencyDropdown = ({
  width = "w-32",
  defaultCurrency = "USD",
  currencies = [],
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-block" ref={dropdownRef}>
      <div
        className={`cursor-pointer flex items-center space-x-1 border border-gray-200 shadow-sm rounded-lg px-2 py-1 ${width}`}
        onClick={toggleDropdown}
        style={{
          color: "black",
          fontWeight: "bold",
          background: "none",
          height: "46px",
        }}
      >
        <span style={{ marginRight: "auto" }}>{selectedCurrency}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ marginLeft: "auto" }}
        >
          <path fillRule="evenodd" d="M10 15l6-6H4z" />
        </svg>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-10">
          {currencies.map((currency, index) => (
            <a
              key={index}
              href="#"
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                currency === selectedCurrency ? "font-bold" : ""
              }`}
              onClick={() => handleCurrencySelection(currency)}
            >
              {currency}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
