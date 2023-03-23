import NavList from './Nav/nav';
import * as React from 'react';
import { Box, Center, AspectRatio, Flex, Badge, Text } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
export const App = () => {
  return (
    <>
      <NavList />
      <Center h="100vh">
        <Box p="5" maxW="500px" borderWidth="1px">
          <AspectRatio maxW="560px" maxH="260px" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/4Ze7HAcsuJY"
              allowFullScreen
            />
          </AspectRatio>

          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">Plus</Badge>
            <Text
              ml={5}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              Verified &bull; Cape Town
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            Ten minutes about Git, or Git for beginners
          </Text>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>5.0</b> (1958)
            </Text>
          </Flex>
        </Box>
      </Center>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Проект для тренування роботі на GitHub
      </div>
    </>
  );
};
