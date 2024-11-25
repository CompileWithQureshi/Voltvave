import React from "react";
import { Avatar } from "@chakra-ui/react";
import LocalShop from '../assets/localShop.jpg';
import Offer from '../assets/Offer.jpg';

function Product() {
  return (
    <section className="text-start mb-10 px-4 md:px-10">
      {/* Section Heading */}
      <h1 className="font-extrabold text-3xl md:text-4xl text-heading text-start mb-8">
        What We Do
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Aside */}
        <aside className="w-full md:w-[30rem] flex flex-col justify-between">
          <p className="my-5 text-secondary text-base md:text-lg w-full md:w-[30rem]">
            "Discover a faster, more convenient way to shop locally. Our platform connects you with trusted vendors and delivers high-quality products directly to your door, ensuring a seamless, reliable experience every time."
          </p>
          <ul className="list-none space-y-3">
            <li className="p-3 border rounded-md text-paragraph font-semibold text-secondary hover:bg-gray-100 transition-colors duration-300">
              Local Vendor Connections
            </li>
            <li className="p-3 border mb-3 rounded-md text-paragraph font-semibold text-white bg-success hover:bg-green-600 transition-colors duration-300">
              Fast Delivery
            </li>
            <li className="p-3 border rounded-md text-paragraph font-semibold text-secondary hover:bg-gray-100 transition-colors duration-300">
              Seamless Shopping Experience
            </li>
            <li className="p-3 border rounded-md text-paragraph font-semibold text-secondary hover:bg-gray-100 transition-colors duration-300">
              Quality Assurance
            </li>
          </ul>
        </aside>

        {/* Right Aside (Image) */}
        <aside className="w-full h-[20rem] md:h-[27.5625rem]">
          <img
            src={LocalShop}
            alt="Shopping experience illustration"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </aside>
      </div>

      {/* Second Section (Product Showcase) */}
      <main className="mt-10">
        <h1 className="font-extrabold text-3xl md:text-4xl text-heading text-start mb-5">
          Providing You the Best Products
        </h1>
        <div className="h-48 w-full mb-5">
          <img
            src={Offer}
            alt="Product display"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Avatars (Vendors/Clients) */}
        <div className="flex justify-center md:justify-between flex-wrap gap-4 md:gap-8 p-5">
          {[...Array(8)].map((_, index) => (
            <Avatar
              key={index}
              name={`User ${index + 1}`}
              size="lg"
              className="mx-auto"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Product;
