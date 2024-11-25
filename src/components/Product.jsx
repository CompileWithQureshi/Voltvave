import React from "react";
import { Avatar } from "@chakra-ui/react";
import LocalShop from '../assets/localShop.jpg'
import Offer from '../assets/Offer.jpg'

function Product() {
  return (
    <section className="text-start mb-5 px-4 md:px-10">
      {/* Section Heading */}
      <h1 className="font-extrabold text-heading text-start mb-5">
        What we do.
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        {/* Left Aside */}
        <aside className="w-full md:w-[30rem] flex flex-col justify-between">
          <p className="my-5 text-secondary text-title w-[30rem]">
            "Discover a faster, more convenient way to shop locally. Our
            platform connects you with trusted vendors and delivers
            high-quality products directly to your door, ensuring a seamless,
            reliable experience every time."
          </p>
          <ul className="list-none">
            <li className="p-3 border mb-3 rounded-md text-paragraph font-semibold text-secondary">
              Local Vendor Connections
            </li>
            <li className="p-3 border mb-3 rounded-md text-paragraph font-semibold text-white bg-success">
              Fast Delivery
            </li>
            <li className="p-3 border mb-3 rounded-md text-paragraph font-semibold text-secondary">
              Seamless Shopping Experience
            </li>
            <li className="p-3 border mb-3 rounded-md text-paragraph font-semibold text-secondary">
              Quality Assurance
            </li>
          </ul>
        </aside>

        {/* Right Aside */}
        <aside className="w-full h-[20rem] md:h-[27.5625rem]">
          <img
            src={LocalShop}
            alt="Shopping experience illustration"
            className="w-full h-full object-cover rounded-md"
          />
        </aside>
      </div>

      {/* Second Section */}
      <main className="mt-10">
        <h1 className="font-extrabold text-heading text-start mb-5">
          Provide you the Best Product
        </h1>
        <div className="h-48 w-full mb-5">
          <img
            src={Offer}
            alt="Product display"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex justify-center md:justify-between flex-wrap gap-3 p-5">
          {[...Array(8)].map((_, index) => (
            <Avatar
              key={index}
              name={`User ${index + 1}`}
              size="md"
              className="mx-auto"
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export default Product;
