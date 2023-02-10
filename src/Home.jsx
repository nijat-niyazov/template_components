import React from 'react';
import { useForm } from 'react-hook-form';
import RegisterForm from './Register';
import { Box, Text } from '@chakra-ui/react';
import Test from './Test';

export default function Home() {
  return (
    <Box maxW="960px" mx="auto">
      {/* <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign={['left', 'center']}
      >
        Welcome to Chakra UI Form Control Label
      </Text>
      <RegisterForm /> */}
      <Test />
    </Box>
  );
}
