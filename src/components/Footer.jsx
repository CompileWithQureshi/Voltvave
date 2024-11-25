import React from "react";
import { Box, Text, Flex, Link, Image, Stack } from "@chakra-ui/react";
// import playStoreLogo from "../assets/playstore.png"; 
// import appStoreLogo from "../assets/appstore.png"; 

function Footer() {
  return (
    <Box bg="secondary" color="white" py={10} px={5} border='1px' marginTop='15px' borderRadius='2xl'>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={5}
      >
        {/* Brand and Tagline */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            LocalShop
          </Text>
          <Text fontSize="sm" mt={2}>
            Connecting you with trusted vendors, ensuring quality and speed.
          </Text>
        </Box>

        {/* Links Section */}
        <Stack direction="row" spacing={10}>
          <Box>
            <Text fontWeight="semibold" mb={2}>
              Company
            </Text>
            <Stack spacing={1}>
              <Link href="#about" _hover={{ textDecor: "underline" }}>
                About Us
              </Link>
              <Link href="#services" _hover={{ textDecor: "underline" }}>
                Services
              </Link>
              <Link href="#contact" _hover={{ textDecor: "underline" }}>
                Contact
              </Link>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight="semibold" mb={2}>
              Resources
            </Text>
            <Stack spacing={1}>
              <Link href="#faq" _hover={{ textDecor: "underline" }}>
                FAQ
              </Link>
              <Link href="#support" _hover={{ textDecor: "underline" }}>
                Support
              </Link>
              <Link href="#terms" _hover={{ textDecor: "underline" }}>
                Terms & Conditions
              </Link>
            </Stack>
          </Box>
        </Stack>

        {/* Download Section */}
        <Box textAlign="center">
          <Text fontWeight="semibold" mb={3}>
            Download Our App
          </Text>
          <Flex gap={3} justify="center">
            <Link href="https://play.google.com" isExternal>
              {/* <Image src={playStoreLogo} alt="Play Store" boxSize="10" /> */}
            </Link>
            <Link href="https://www.apple.com/app-store/" isExternal>
              {/* <Image src={appStoreLogo} alt="App Store" boxSize="10" /> */}
            </Link>
          </Flex>
        </Box>
      </Flex>

      {/* Footer Bottom */}
      <Text textAlign="center" fontSize="sm" mt={10} borderTop="1px" pt={5}>
        &copy; {new Date().getFullYear()} LocalShop. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
