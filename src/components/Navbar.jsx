import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function Navbar() {
  const [active, setActive] = useState("");

  function handleClick(item) {
    setActive(item);
  }

  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-gray-50 shadow-md">
      {/* Logo */}
      <div className="text-logo font-bold border border-secondary px-5 md:px-7 py-2 rounded-md text-primary hover:bg-secondary hover:text-white cursor-pointer">
        Logo
      </div>

      {/* Links */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-x-8">
          {["home", "product", "vendors", "joinus"].map((item) => (
            <a href={`#${item}`} key={item}>
              <li
                className={`font-semibold text-sm md:text-base hover:underline hover:decoration-secondary ${
                  active === item
                    ? "underline decoration-secondary text-secondary"
                    : "text-gray-700"
                }`}
                onClick={() => handleClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            </a>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex gap-x-4">
        <Button
          className="w-24 md:w-28"
          color="white"
          fontWeight="semibold"
          fontSize="16px"
          backgroundColor="success"
          _hover={{ backgroundColor: "success", color: "black" }}
        >
          Sign Up
        </Button>
        <Button
          color="#4C71EF"
          border="1px solid"
          borderColor="#4C71EF"
          fontWeight="semibold"
          fontSize="16px"
          _hover={{ backgroundColor: "#4C71EF", color: "white" }}
          width="6rem"
        >
          Login
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center">
        <Button
          size="sm"
          onClick={() =>
            alert("Implement a dropdown or off-canvas mobile menu here!")
          }
        >
          ☰
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
