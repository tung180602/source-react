import React from "react";
import { navigateTo } from "../../utils/navigates/navigate";

const Header = ({ currentPath, setCurrentPath }) => {
  return (
    <div className="w-full flex justify-center py-4 bg-gray-200">
      <ul className="flex w-[50%] justify-between">
        <li className="font-[600] hover:text-blue-400">
          <button
            onClick={() => {
              const path = navigateTo("/");
              setCurrentPath(path);
            }}
          >
            Home
          </button>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <button
            onClick={() => {
              const path = navigateTo("/information");
              setCurrentPath(path);
            }}
          >
            Information
          </button>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <button
            onClick={() => {
              const path = navigateTo("/news");
              setCurrentPath(path);
            }}
          >
            New
          </button>
        </li>
        <li className="font-[600] hover:text-blue-400">
          <button
            onClick={() => {
              const path = navigateTo("/products");
              setCurrentPath(path);
            }}
          >
            Product
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
