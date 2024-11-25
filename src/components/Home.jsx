import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import HomeImg from "../assets/HomeImg.jpg";

function Home() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="px-4 py-10 bg-gray-50">
      <main className="flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="font-extrabold text-lg md:text-2xl lg:text-4xl text-center text-gray-800">
          "Experience the convenience of local shopping with fast, reliable
          delivery straight to your doorstep. We connect you to the best local
          vendors quickly and efficiently."
        </h1>

        {/* Input Section */}
        <div className="relative flex items-center gap-3 w-full max-w-lg md:max-w-2xl flex-wrap">
          {/* Icon */}
          {!isFocused && (
            <FaMapMarkerAlt
              className="absolute left-3 top-1/4 md:top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          )}

          {/* Input */}
          <input
            type="text"
            className="flex-1 h-12 pl-10 pr-4 border border-secondary rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 md:text-lg placeholder:text-sm"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter your Address"
          />
          <Button
            colorScheme="green"
            size="lg"
            _hover={{ backgroundColor: "#38a169" }} 
            className="md:w-[120px] w-[100px] text-sm md:text-base"
          >
            Search
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src={HomeImg}
            alt="Local Shopping"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </main>
    </section>
  );
}

export default Home;
