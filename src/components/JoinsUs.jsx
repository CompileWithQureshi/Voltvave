import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import navigationImg from "../assets/navigation.jpg";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function JoinsUs() {
  return (
    <section className="mb-5 px-4 md:px-10">
      {/* Section Heading */}
      <h1 className="text-heading font-extrabold text-start flex items-center mb-6">
        We are Available{" "}
        <FaMapMarkerAlt className="text-secondary ml-2" size={24} />
      </h1>

      {/* Main Content */}
      <main className="flex flex-col items-center">
        {/* Responsive Image */}
        <img
          src={navigationImg}
          alt="Navigation"
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg mb-8"
        />

        {/* Cards Section */}
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          width="100%"
          maxW="800px"
        >
          {/* Vendor Card */}
          <Card
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            shadow="lg"
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <CardBody>
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                Vendor
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green" size="md">
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* Rider Card */}
          <Card
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            shadow="lg"
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <CardBody>
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                Rider
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="green" size="md">
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </main>
    </section>
  );
}

export default JoinsUs;
