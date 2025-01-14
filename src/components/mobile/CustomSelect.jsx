import { useState, useEffect, useRef } from "react";

const CustomSelect = ({onLanguageChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("az");
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  const options = [
    { value: "az", label: "AZ" },
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    onLanguageChange(option.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}> {/* Attach ref to the wrapper */}
      <button
        onClick={toggleDropdown}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1"
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg top-[-110px]">
          {options.map((option) => (
            <li
              key={option.value}
              className="text-sm p-2 text-black cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
