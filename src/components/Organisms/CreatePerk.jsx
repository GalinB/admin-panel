import Button from "@/components/atoms/Button";
import React, { useState, useEffect, useRef } from "react";
import MenuImage from "../atoms/MenuImage.jsx";

export default function CreatePerk({ onClose }) {
  const [isPermissionsExpanded, setIsPermissionsExpanded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  const togglePermissions = () => {
    setIsPermissionsExpanded(!isPermissionsExpanded);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col bg-white border border-solid border-gray-300 shadow-md rounded-md p-3 gap-3 w-4/5 md:w-1/3"
    >
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex-grow flex justify-center">
          <MenuImage
            src="/creating_perk.svg"
            width={200}
            height={200}
            alt="Menu Icon"
          />
        </div>
        <button onClick={onClose}>
          <MenuImage
            src="/close_circle.svg"
            width={50}
            height={50}
            alt="Menu Icon"
          />
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          <label className="pl-3 pb-1 text-gray-400">Perk Name</label>
          <input
            className="bg-white bg-opacity-6 border border-opacity-6 shadow-sm rounded-lg text-gray-400 font-medium mb-2 p-3"
            type="text"
            id="perkName"
            placeholder="Enter perk name"
          />
        </div>
        <div className="text-gray-400 mt-3 pl-3 pb-1">
          Permissions (allow subscriber to)
        </div>
        <div className="bg-white bg-opacity-6 border border-opacity-6 shadow-sm rounded-lg">
          <div
            className="flex items-center cursor-pointer"
            onClick={togglePermissions}
          >
            <span className="mr-2 text-gray-400 font-medium p-3">None</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isPermissionsExpanded ? "transform rotate-90" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          {isPermissionsExpanded && (
            <div className="text-gray-400 font-medium p-3">
              <div>
                <input type="checkbox" id="permission1" />
                <label htmlFor="permission1">Permission 1</label>
              </div>
              <div>
                <input type="checkbox" id="permission2" />
                <label htmlFor="permission2">Permission 2</label>
              </div>
              <div>
                <input type="checkbox" id="permission3" />
                <label htmlFor="permission3">Permission 3</label>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full mt-60"
        >
          <Button label="Create Perk" />
        </button>
      </form>
    </div>
  );
}
