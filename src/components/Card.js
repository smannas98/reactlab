import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="white" color="black" borderRadius="lg" >
      <VStack>
        <Image borderRadius="lg" src={imageSrc} />
        <Box marginTop={2} marginBottom={2} marginLeft={5} marginRight={5}>
          <Heading>{title}</Heading>
          <Text marginTop={2} marginBottom={2} color={"blue.400"}>{description}</Text>
          <a href={`/project/${title}`}>See more <FontAwesomeIcon icon={faArrowRight} /></a>
        </Box>
      </VStack>
    </Box>
  )
};

export default Card;
