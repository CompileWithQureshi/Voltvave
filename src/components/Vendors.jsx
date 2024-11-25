import React from "react";
import partner from "../assets/partner.jpg"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Stack,
  Divider,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

function Vendors() {
  return (
    <section className="mb-5 px-4 md:px-10">
      {/* Section Title */}
      <h1 className="text-heading font-extrabold text-start mb-8">
        Our Partner's
      </h1>

      {/* Partners Section */}
      <main className="mb-10">
        <SimpleGrid spacing={6} templateColumns="repeat(auto-fit, minmax(250px, 1fr))">
          {[...Array(3)].map((_, index) => (
            <Card key={index} maxW="sm" shadow="lg" borderWidth="1px" borderRadius="lg">
              <CardBody>
                <Image
                  src={partner}
                  alt="Partner logo"
                  borderRadius="lg"
                  className="w-full h-48 object-cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living Room Sofa</Heading>
                  <Text className="text-paragraph">
                    This sofa is perfect for modern tropical spaces, baroque-inspired spaces,
                    earthy-toned spaces, and for people who love chic designs with a sprinkle
                    of vintage.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="green">
                    Sign Up
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </main>

      {/* Features Section */}
      <main className="text-start">
        <SimpleGrid spacing={6} templateColumns="repeat(auto-fit, minmax(250px, 1fr))">
          {[
            {
              title: "Reliable Partnerships",
              description:
                "We collaborate with only the most reputable and verified local vendors, ensuring quality and consistency in every product we deliver.",
            },
            {
              title: "Secure Transactions",
              description:
                "Our platform uses the latest encryption and security measures, protecting your personal information and providing peace of mind during every transaction.",
            },
            {
              title: "Reports",
              description:
                "We value customer satisfaction and actively listen to feedback, offering dedicated support to resolve any concerns promptly and professionally.",
            },
            {
              title: "Analytics",
              description:
                "We provide insightful analytics to help vendors and customers make informed decisions about their shopping experience.",
            },
          ].map((feature, index) => (
            <Card key={index} shadow="2xl" borderWidth="1px" borderRadius="lg">
              <CardHeader>
                <Heading size="md">{feature.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{feature.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue">View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </main>
    </section>
  );
}

export default Vendors;
